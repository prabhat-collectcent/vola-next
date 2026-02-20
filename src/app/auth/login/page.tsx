import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
// import { authOptions } from '@/lib/auth';
import SignInForm from './SignInForm';

export default async function LoginPage() {
  // const session = await getServerSession(authOptions);

  // ✅ SSR redirect (already logged in)
  if (false) {
    redirect('/admin/dashboard');
  }

  return <SignInForm />;
}
