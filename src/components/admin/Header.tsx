import React, { useState, useRef, useEffect } from 'react';
import { Bell, Sun, Moon, User, HelpCircle, Search } from 'lucide-react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import Image from 'next/image';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Header({
  onToggleSidebar,
}: {
  onToggleSidebar: () => void;
}) {
  const [darkMode, setDarkMode] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showBalance, setShowBalance] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const userProfile = {
    name: 'Prabhat',
    email: 'prabhat@collectcent.com',
    id: '1',
    avatar: '/profile-avatar.svg',
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setShowNotifications(false);
        setShowProfile(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="self-stretch p-3 bg-white md:border-b md:border-gray-200 flex justify-between items-center sticky top-0 z-40">
      {/* Left — Sidebar (mobile) / Balance (desktop) */}
      <div className="flex items-center gap-3">
        {/* Mobile sidebar toggle */}
        <button
          onClick={onToggleSidebar}
          className="md:hidden w-6 h-6 flex items-center justify-center rounded-full cursor-pointer"
        >
          <MenuRoundedIcon fontSize="small" />
        </button>

        {/* Desktop balance */}
        <div className="hidden md:flex lg:flex px-1.5 py-0.5 bg-sky-50 rounded-[5px] items-center gap-[6px]">
          <AccountBalanceWalletOutlinedIcon
            sx={{ fontSize: 16, color: '#1C1B1F' }}
          />
          <span className="text-sm font-light text-neutral-600">Balance:</span>
          <span className="text-sm font-normal text-indigo-800">$4001</span>
        </div>
      </div>

      {/* Right — Actions */}
      <div className="flex items-center gap-3 md:gap-6" ref={dropdownRef}>
        {/* Mobile Search */}
        <div className="relative md:hidden">
          <button className="hidden md:flex w-6 h-6 items-center justify-center bg-sky-50 rounded-full cursor-pointer">
            <Search size={14} />
          </button>

          {showMobileSearch && (
            <div className="absolute right-0 mt-2 w-56 h-7 px-2 py-1 bg-white rounded-lg outline outline-1 outline-neutral-200 focus-within:outline-[#4144E6] flex items-center z-50">
              <Search size={14} className="text-black/30" />
              <input
                autoFocus
                type="text"
                placeholder="Search"
                className="ml-1 text-xs text-black/60 bg-transparent outline-none w-full"
              />
            </div>
          )}
        </div>

        {/* Search */}
        <div className="hidden lg:flex w-56 h-7 px-2 py-1 rounded-lg outline outline-1 outline-neutral-200 focus-within:outline-[#4144E6] justify-between items-center">
          <div className="flex items-center gap-1.5">
            <Search size={14} className="text-black/30" />
            <input
              type="text"
              placeholder="Search"
              className="text-xs text-black/60 bg-transparent outline-none w-full"
            />
          </div>
        </div>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="w-6 h-6 flex items-center justify-center bg-sky-50 rounded-full relative cursor-pointer"
          >
            <Bell size={14} />
            <span className="absolute top-[3px] right-[3px] w-[6px] h-[6px] bg-indigo-500 rounded-full" />
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-[300px] bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden z-50">
              <div className="px-4 py-3 border-b text-sm font-normal">
                Notifications
              </div>
              <div className="max-h-[260px] overflow-y-auto">
                {Array.from({ length: 4 }).map((_, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 px-4 py-2 hover:bg-sky-50 cursor-pointer"
                  >
                    <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center">
                      <User size={14} />
                    </div>
                    <div>
                      <div className="text-sm font-normal">
                        New user registered
                      </div>
                      <div className="text-xs text-gray-400">
                        59 minutes ago
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="w-9 h-9 rounded-full overflow-hidden cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden">
              <Image
                src={userProfile.avatar}
                alt="User"
                width={36}
                height={36}
                className="object-cover"
              />
            </div>
          </button>

          {showProfile && (
            <div className="absolute right-0 mt-2 z-50">
              <div className="p-3 bg-white rounded-lg shadow-[0px_0px_8px_0px_rgba(0,0,0,0.08)] flex flex-col gap-3 w-[220px]">
                {/* User info */}
                <div className="flex gap-2.5">
                  <div className="w-9 h-9 rounded-full overflow-hidden">
                    <Image
                      src={userProfile.avatar}
                      alt="User"
                      width={36}
                      height={36}
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-0.5">
                    <div className="text-xs text-black">
                      {userProfile.name || '—'}
                    </div>
                    <div className="text-xs text-neutral-700">
                      {userProfile.email || '—'}
                    </div>
                    <div className="text-[9px] text-neutral-700">
                      {userProfile.id ? `ID: ${userProfile.id}` : '—'}
                    </div>
                  </div>
                </div>

                {/* Mobile Balance */}
                <div className="md:hidden px-2 py-1 bg-sky-50 rounded text-xs">
                  <span className="text-neutral-600">Balance:</span>{' '}
                  <span className="text-indigo-800 font-medium">$4001</span>
                </div>

                <div className="h-px bg-gray-200" />

                {/* Menu items */}
                <div className="flex flex-col gap-3">
                  <button className="flex items-center gap-2.5 text-xs text-black cursor-pointer">
                    <PersonOutlineIcon sx={{ fontSize: 16 }} />
                    My Account
                  </button>

                  <div className="h-px bg-gray-200" />

                  <button className="flex items-center gap-2.5 text-xs text-black cursor-pointer">
                    <HelpOutlineIcon sx={{ fontSize: 16 }} />
                    Help Center
                  </button>

                  <div className="h-px bg-gray-200" />

                  <button className="flex items-center gap-2.5 text-xs text-black cursor-pointer">
                    <LogoutIcon sx={{ fontSize: 16 }} />
                    Log Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
