'use client';

import Image from 'next/image';

export default function AuthHeader() {
  return (
    <header className="w-full h-[60px] flex items-center justify-between bg-white">
      <a href="/" className="w-[205px] h-[34px] flex items-center ml-[22px]">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={130}
          height={40}
          className="object-contain"
          priority
          unoptimized
        />
      </a>

      <div className="flex items-center gap-4"></div>
    </header>
  );
}
