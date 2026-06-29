import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import SignUpForm from './ForgotPassword';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function RegisterPage() {
   const session = await getServerSession(authOptions);
    if (session) {
      redirect('/admin/dashboard');
    }

  return <SignUpForm/>
}
