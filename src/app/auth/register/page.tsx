import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
// import { authOptions } from '@/lib/auth'; // adjust path if needed
import SignUpForm from './SignUpForm';

export default async function RegisterPage() {
  // const session = await getServerSession(authOptions);

  if (false) {
    redirect('/admin/dashboard');
  }

  return <SignUpForm />;
}
