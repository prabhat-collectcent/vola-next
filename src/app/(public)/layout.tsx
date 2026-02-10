import Header from '@/components/layout/Header';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCFF]">
      <Header />
      <div className="flex items-center justify-center py-[40px] bg-[#FDFCFF]">
        {children}
      </div>
    </div>
  );
}
