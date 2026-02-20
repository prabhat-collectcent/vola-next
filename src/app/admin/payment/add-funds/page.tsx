'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AddFundsPage() {
  const amounts = [5000, 5500, 6000, 6500, 7000];
  const [selected, setSelected] = useState<number | 'other' | null>(null);

  return (
    <div className="flex flex-col bg-[#F8F8FA] min-h-screen">
      {/* ===== Breadcrumb ===== */}
      <div className="flex justify-between items-center px-6 py-6 bg-white border-b border-[#E5E5EA]">
        <div className="text-[13px] flex items-center gap-1">
          <Link
            href="/admin/payment"
            className="text-[#868686] hover:underline"
          >
            Funds
          </Link>

          <span className="text-[#868686]">/</span>

          <span className="text-[#000000]">Add Funds</span>
        </div>
      </div>

      {/* ===== Content Area ===== */}
      <div className="flex justify-center px-4 sm:px-6 py-6 sm:py-10">
        <div
          className="
            w-full 
            max-w-[760px] 
            bg-white 
            rounded-xl sm:rounded-2xl 
            border border-[#F7F7F7] 
            px-4 sm:px-14 
            py-6 
            flex flex-col 
            items-center 
            gap-10 sm:gap-14
          "
        >
          {/* Title */}
          <h2 className="text-[16px] sm:text-[20px] font-semibold text-center">
            Choose an amount or enter your own
          </h2>

          {/* ===== Amount Grid ===== */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 w-full">
            {amounts.map((amt) => (
              <button
                key={amt}
                onClick={() => setSelected(amt)}
                className={`py-3 sm:py-3.5 rounded-xl border text-[14px] sm:text-[15px] transition
                  ${
                    selected === amt ? 'border-[#4144E6]' : 'border-[#00000026]'
                  }
                `}
              >
                ${amt}
              </button>
            ))}

            {/* Other */}
            <button
              onClick={() => setSelected('other')}
              className={`py-3 sm:py-3.5 rounded-xl border text-[14px] sm:text-[15px] transition
                ${
                  selected === 'other'
                    ? 'border-[#4144E6]'
                    : 'border-[#00000026]'
                }
              `}
            >
              Other
            </button>
          </div>

          {/* ===== Payment Options ===== */}
          <div className="flex flex-col items-center gap-4 w-full">
            {/* PayPal */}
            <button className="w-full sm:w-[300px] h-[44px] sm:h-[46px] bg-[#EEF7FD] hover:bg-[#DCEFFD] rounded-lg flex justify-center items-center cursor-pointer">
              <Image src="/paypal.svg" alt="PayPal" width={98} height={26} />
            </button>

            {/* Wire Transfer */}
            <button className="w-full sm:w-[300px] h-[44px] sm:h-[46px] bg-[#EEF7FD] hover:bg-[#DCEFFD] rounded-lg text-[14px] sm:text-[15px] font-medium cursor-pointer">
              Wire Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
