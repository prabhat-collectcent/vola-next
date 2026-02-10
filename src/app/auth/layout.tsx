import Header from '@/components/layout/Header';
import { SessionProvider } from 'next-auth/react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFF]">
      <Header />
      <div className="flex items-center justify-center py-[40px] sm:py-[85px] bg-[#FDFCFF]">
        {children}
      </div>
    </div>
  );
}
