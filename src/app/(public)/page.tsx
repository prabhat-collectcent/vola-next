import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export default async function Home() {

   const session = await getServerSession(authOptions);
    console.log('session', session);
    if (session) {
      redirect('/admin/dashboard');
    }

  return (
    <>
      <div className="flex flex-col">
        <div className="text-center text-[20px] font-medium">Home Page</div>
        <div className="flex justify-center gap-[10px]">
          <Link href="/auth/login" className="cursor-pointer underline">
            Sign in
          </Link>

          <Link href="/auth/register" className="cursor-pointer underline">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
}
