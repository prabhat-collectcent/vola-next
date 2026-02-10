import Link from 'next/link';

export default function Home() {
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
