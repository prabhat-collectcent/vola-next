'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import InvoicesPage from './InvoicesPage';
import TransactionsPage from './TransactionsPage';

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState<'invoices' | 'transactions'>(
    'transactions'
  );

  const router = useRouter();

  return (
    <div className="flex flex-col bg-[#F8F8FA] min-h-screen">
      {/* ===== Top Header ===== */}
      <div className="flex justify-between items-center px-6 py-4 bg-white border-b border-[#E5E5EA]">
        <span className="text-[14px] font-medium">Payments</span>

        <button
          onClick={() => router.push('/admin/payment/add-funds')}
          className="bg-[#4F46E5] text-white px-5 py-2 rounded-full text-[13px] hover:bg-[#3F3CCF]"
        >
          Add Funds
        </button>
      </div>

      {/* ===== Tabs Header ===== */}
      <div className="bg-white px-6 border-b border-[#E5E5EA]">
        <div className="flex gap-8 text-[13px] pt-4">
          <button
            onClick={() => setActiveTab('transactions')}
            className={`pb-3 ${
              activeTab === 'transactions'
                ? 'text-[#4144E6] border-b-2 border-[#4144E6]'
                : 'text-[#8E8E93]'
            }`}
          >
            Transactions
          </button>

          <button
            onClick={() => setActiveTab('invoices')}
            className={`pb-3 ${
              activeTab === 'invoices'
                ? 'text-[#4144E6] border-b-2 border-[#4144E6]'
                : 'text-[#8E8E93]'
            }`}
          >
            Invoices
          </button>
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="p-4">
        {activeTab === 'transactions' && <TransactionsPage />}
        {activeTab === 'invoices' && <InvoicesPage />}
      </div>
    </div>
  );
}
