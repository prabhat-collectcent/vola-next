'use client';

import Image from 'next/image';

export default function AuthHeader() {
  return (
    <header className="w-full h-[60px] flex items-center justify-between bg-white">
      <a
        href="/"
        className="w-[205px] h-[34px] flex items-center gap-1 ml-[20px] sm:ml-[120px]"
      >
        <Image src="/ellipse.svg" alt="Logo" width={22} height={24} />
        <Image src="/logo.svg" alt="Logo" width={69} height={22} />
      </a>

      <div className="flex items-center gap-4"></div>
    </header>
  );
}
