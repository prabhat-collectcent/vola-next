export const runtime = 'nodejs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import AzureADProvider from 'next-auth/providers/azure-ad';
import { JWT } from 'next-auth/jwt';
import { User, Session } from 'next-auth';

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

          let endpoint = '/api/auth/login';
          let payload = {
            email: credentials?.email,
            password: credentials?.password,
          };


          const res = await fetch(`${process.env.API_BASE_URL}${endpoint}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

          const jsonResponse = await res.json();
          console.log('login api response', jsonResponse);

          if (!res.ok || !jsonResponse.success) {
            throw new Error(jsonResponse.error || 'Login failed');
          }
          return { token: jsonResponse.data.token, user: jsonResponse.data.user } as any;
        } catch (error) {
          throw new Error(error instanceof Error ? error.message : 'Login failed');
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
      user,
    }: {
      token: any;
      user?: any | null;
    }) {
      if (user) {
        token.accessToken = user.token;
        token.user = user.user;
      }
      return token;

    },

    async session({ session, token }: { session: any, token: any }) {
      session.user = token.user;
      session.accessToken = token.accessToken;
      return session;
    },

  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: true,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
