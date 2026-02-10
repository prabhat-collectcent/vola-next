export const runtime = 'nodejs';

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import AzureADProvider from 'next-auth/providers/azure-ad';
import { JWT } from 'next-auth/jwt';
import { Account, User, Session } from 'next-auth';

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
        type: { label: 'Type', type: 'text' },
        username: { label: 'username', type: 'text' },
      },

      async authorize(credentials: any) {
        try {
          const endpoint =
            credentials?.type === 'signup' ? '/auth/signup' : '/auth/login';

          const res = await fetch(`${process.env.API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
              name: credentials?.username,
            }),
          });

          const data = await res.json();
          console.log('🔵 Auth API Response:', data);

          if (!res.ok || !data.access_token) return null;

          return {
            id: data.user.id, // Required
            accessToken: data.access_token,
            email: data.user.email,
            username: data.user.name,
            userType: data.user.user_type,
            userId: data.user.id,
          } as User;
        } catch (error) {
          console.error('❌ Credentials authorize error:', error);
          return null;
        }
      },
    }),

    AzureADProvider({
      clientId: process.env.AZURE_AD_CLIENT_ID!,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
      tenantId: process.env.AZURE_AD_TENANT_ID!,
    }),
  ],

  callbacks: {
    async jwt({
      token,
      account,
      user,
    }: {
      token: JWT;
      account?: Account | null;
      user?: User | null;
    }) {
      if (user && (user as any).accessToken) {
        token.accessToken = (user as any).accessToken;
        token.email = (user as any).email;
        token.username = (user as any).username;
        token.userType = (user as any).userType;
        token.userId = (user as any).userId;
        return token;
      }

      if (account) {
        token.microsoftAccessToken = account.access_token;
        token.email = (user as any)?.email;
        token.username = (user as any)?.name;
        token.microsoftId = account.providerAccountId;
      }

      if ((token as any).microsoftAccessToken && !(token as any).accessToken) {
        try {
          const res = await fetch(
            `${process.env.API_BASE_URL}/auth/microsoft-login`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                access_token: (token as any).microsoftAccessToken,
                email: token.email,
                username: token.username,
                microsoft_id: (token as any).microsoftId,
              }),
            }
          );

          const data = await res.json();
          console.log('🟣 Microsoft backend response:', data);

          token.accessToken = data.access_token;
          token.email = data.user.email;
          token.username = data.user.name;
          token.userType = data.user.user_type;
          token.userId = data.user.id;
        } catch (err) {
          console.error('❌ Microsoft login exchange error:', err);
        }
      }

      return token;
    },

    async session({
      session,
      token,
    }: {
      session: Session & {
        accessToken?: string;
        microsoftAccessToken?: string;
      };
      token: JWT;
    }) {
      session.accessToken = (token as any).accessToken;
      session.microsoftAccessToken = (token as any).microsoftAccessToken;
      session.user = {
        email: token.email as any,
        username: (token as any).username,
        user_type: (token as any).userType,
        id: (token as any).userId,
      } as any;
      return session;
    },

    async redirect({ baseUrl }: { baseUrl: string }) {
      return `${baseUrl}/admin/dashboard/home`;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
