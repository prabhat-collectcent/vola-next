import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  {
    label: 'Dashboard',
    icon: '/dashboard-icon.svg',
    href: '/admin/dashboard',
  },
  {
    label: 'Campaigns',
    icon: '/campaign-icon.svg',
    href: '/admin/campaign',
  },
  {
    label: 'Reports',
    icon: '/report-icon.svg',
    href: '/admin/report',
  },
  {
    label: 'Payments',
    icon: '/payment-icon.svg',
    href: '/admin/payment',
  },
];

export default function Sidebar({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [hoverLogo, setHoverLogo] = useState(false);
  const [collapseLocked, setCollapseLocked] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const handleCollapse = () => {
    setCollapsed(true);
    setCollapseLocked(true);
    setHoverLogo(false);
    setTimeout(() => setCollapseLocked(false), 300);
  };

  const handleExpand = () => {
    setCollapsed(false);
  };

  return (
    <>
      <aside
        className={`fixed lg:static top-0 left-0 z-[60] h-full bg-white border-r border-[#EBEBEB]
        transition-transform duration-300 ease-in-out
        lg:transition-[width]
        ${collapsed ? 'lg:w-[70px]' : 'lg:w-[200px]'}
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0`}
      >
        <div className="flex items-center py-[18px] px-[12px] h-[60px]">
          <div className="flex items-center gap-1 relative">
            {/* Ellipse */}
            <button
              onClick={handleExpand}
              className={`flex-shrink-0 w-[22px] h-[24px]
                transition-opacity duration-300
                ${collapsed ? 'opacity-100' : 'opacity-100 pointer-events-none'}
              `}
            >
              <Image src="/ellipse.svg" alt="Logo" width={22} height={24} />
            </button>

            {/* Text logo */}
            <div
              className={`transition-all duration-300 overflow-hidden ${
                collapsed ? 'opacity-0 w-0' : 'opacity-100 w-[69px]'
              }`}
            >
              <Image src="/logo.svg" alt="Logo" width={69} height={22} />
            </div>
          </div>

          {/* Collapse icon */}
          <button
            onClick={handleCollapse}
            className={`ml-auto hidden md:flex items-center justify-center rounded hover:bg-[#F2F2F2]
          transition-opacity duration-300
          ${collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}
        `}
          >
            <img src="/left-panel-open.svg" width={24} height={24} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-[7px]">
          {navItems.map(({ label, icon, href }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={label}
                href={href}
                onClick={onClose}
                className={`flex items-center gap-[6px] h-[40px] font-normal text-small
                  ${active ? 'bg-[#FBF7FB]' : 'hover:bg-[#FBF7FB]'}`}
              >
                <div
                  className={`flex justify-center px-[8px]
                  ${active ? 'rounded-r-[4px] border-l-4 border-l-[#211398]' : ''}`}
                >
                  <div className="flex justify-center gap-3">
                    <Image
                      src={icon}
                      alt={label}
                      width={20}
                      height={20}
                      className={`transition-opacity ${
                        active ? 'opacity-100' : 'opacity-70'
                      }`}
                    />

                    <span
                      className={`transition-all whitespace-nowrap overflow-hidden ${
                        collapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 bg-black/40 z-[50] lg:hidden ${
          isOpen ? 'block' : 'hidden'
        }`}
        onClick={onClose}
      />
    </>
  );
}
