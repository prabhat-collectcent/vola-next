'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navItems = [
  { image: '/dashboard.png', name: 'Dashboard', href: '/admin/dashboard' },
  { image: '/department.png', name: 'Department', href: '/admin/department' },
  { image: '/user.png', name: 'User', href: '/admin/users' },
  { image: '/analytics.png', name: 'Analytics', href: '/admin/analytics' },
  { image: '/settings.png', name: 'Settings', href: '/admin/settings' },
];

export default function Sidebar({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: () => void;
}) {
  const pathname = usePathname();

  const [userme, setUser] = useState<string | null>(null);

  useEffect(() => {
    const t = localStorage.getItem('userme'); // <-- GET VALUE
    setUser(t);
  }, []);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-full bg-[#FFFFFF] flex flex-col gap-[10px] transform transition-transform duration-300 lg:w-[239px] lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header section inside sidebar */}
        <div className="h-[59px] flex items-center justify-between px-[10px] py-[6px]">
          <a href="/" className="flex items-center h-full">
            <Image
              src="/logo.png"
              alt="Logo"
              width={203}
              height={34}
              className="object-contain"
            />
          </a>

          {/* Cross Button (only visible on mobile) */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-300 hover:text-white text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 py-[20px]">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <div key={item.href} className="flex">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={toggleSidebar}
                  className={`block rounded-md text-sm font-medium transition-colors ${
                    isActive ? 'bg-[#F4F4FF]' : 'hover:bg-[#F4F4FF]'
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
