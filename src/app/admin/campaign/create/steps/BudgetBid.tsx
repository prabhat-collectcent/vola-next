'use client';

import React, { useState } from 'react';
import Text from '@/components/admin/form/fields/Text';
import Select from '@/components/admin/form/fields/Select';

interface Props {
  isActive: boolean;
  isDisabled?: boolean;
  onToggle: () => void;
}

export default function BudgetBid({ isActive, isDisabled, onToggle }: Props) {
  const [totalBudget, setTotalBudget] = useState('');
  const [dailyBudget, setDailyBudget] = useState('');
  const [bidType, setBidType] = useState('');
  const [amount, setAmount] = useState('');
  const [dailyCap, setDailyCap] = useState('');

  if (isDisabled) {
    return (
      <div
        onClick={onToggle}
        className="w-full px-12 py-5 bg-white rounded-2xl outline outline-1 outline-neutral-100 cursor-pointer opacity-60"
      >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-2xl outline outline-neutral-300 flex items-center justify-center">
            4
          </div>
          <div className="text-lg">Budget & Bid</div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full px-12 py-5 bg-white rounded-2xl border border-neutral-100 flex flex-col">
      {/* Header */}
      <div
        onClick={onToggle}
        className="flex items-center gap-3 cursor-pointer"
      >
        <div className="w-6 h-6 rounded-2xl outline outline-[#4144E6] flex items-center justify-center text-[#4144E6]">
          4
        </div>
        <div className="text-lg">Budget & Bid</div>
      </div>

      {/* Animated Body */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          isActive
            ? 'opacity-100 translate-y-0 mt-6'
            : 'opacity-0 -translate-y-2 hidden'
        }`}
      >
        <div className="flex flex-col">
          {/* Budgets */}
          <div className="flex gap-3">
            <Text
              label="Total Budget"
              name="totalBudget"
              value={totalBudget}
              onChange={(val: string) => setTotalBudget(val)}
              placeholder="Total Budget"
              className="mb-[24px]"
            />

            <Text
              label="Daily Budget"
              name="dailyBudget"
              value={dailyBudget}
              onChange={(val: string) => setDailyBudget(val)}
              placeholder="Daily Budget"
              className="mb-[24px]"
            />
          </div>

          {/* Bid & Amount */}
          <div className="flex gap-3">
            <Select
              label="Bid"
              name="bidType"
              value={bidType}
              onChange={(val: string) => setBidType(val)}
              placeholder="CPM"
              className="mb-[24px]"
              options={[
                { label: 'CPM', value: 'cpm' },
                { label: 'CPC', value: 'cpc' },
                { label: 'CPA', value: 'cpa' },
              ]}
            />

            <Text
              label="Amount"
              name="amount"
              value={amount}
              onChange={(val: string) => setAmount(val)}
              className="mb-[24px]"
              placeholder="Amount"
            />
          </div>

          {/* Daily Conversion Cap */}
          <Text
            label="Daily Conversion Cap"
            name="dailyCap"
            value={dailyCap}
            onChange={(val: string) => setDailyCap(val)}
            placeholder="Daily Conversion Cap"
            className="mb-[24px]"
          />
        </div>
      </div>
    </div>
  );
}
