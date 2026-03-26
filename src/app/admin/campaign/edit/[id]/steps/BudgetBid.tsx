'use client';

import React, { useState } from 'react';
import Text from '@/components/admin/form/fields/Text';
import Select from '@/components/admin/form/fields/Select';
import { useCampaign } from '../context/CampaignContext';
import { CampaignBudgetSchema } from '@/lib/validations/camapaign.validation';

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

  const { state, dispatch } = useCampaign()

  const [errors, setErrors] = useState<Record<string, string>>({})



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    dispatch({
      type: "SET_FIELD",
      payload: {
        ...state,
        [e.target.name]: (e.target.type === 'number' && e.target.value) ? parseFloat(e.target.value) : e.target.value
      }
    })
  }

  function handleNextStep() {
    console.log("current state", state)
    const result = CampaignBudgetSchema.safeParse({ budget: state.budget, bid_value: state.bid_value });
    console.log("validation result", result)
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};

      result.error.issues.forEach((err) => {
        const key = String(err.path[0]);
        fieldErrors[key] = err.message;
      });

      setErrors(fieldErrors);
      return;

    }

    setErrors({})
  }



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
        className={`transition-all duration-300 ease-in-out ${isActive
          ? 'opacity-100 translate-y-0 mt-6'
          : 'opacity-0 -translate-y-2 hidden'
          }`}
      >
        <div className="flex flex-col">
          {/* Budgets */}
          <div className="flex gap-3">
            {/* <Text
              label="Total Budget"
              name="totalBudget"
              value={totalBudget}
              onChange={(val: string) => setTotalBudget(val)}
              placeholder="Total Budget"
              className="mb-[24px]"
            /> */}

            <Text
              type='number'
              label="Daily Budget"
              name="budget"
              value={state.budget || ''}
              onChange={handleChange}
              placeholder="Daily Budget"
              className="mb-[24px]"
              error={errors.budget}
              step="any"
            />
          </div>

          {/* Bid & Amount */}
          <div className="flex gap-3">
            <Select
              label="Bid"
              name="bidType"
              value="cpm"
              // onChange={handleChange}
              placeholder="CPM"
              className="mb-[24px]"
              options={[
                { label: 'CPM', value: 'cpm' }
              ]}
            />

            <Text
              type='number'
              label="Amount"
              name="bid_value"
              value={state.bid_value || ''}
              onChange={handleChange}
              className="mb-[24px]"
              placeholder="Amount"
              error={errors.bid_value}
              step="any"


            />
          </div>

          {/* Next */}
          <div className="flex justify-end">
            <button
              onClick={handleNextStep}
              className="px-4 py-2 bg-indigo-800 rounded-full text-white text-sm"
            >
              Save
            </button>
          </div>


          {/* Daily Conversion Cap */}
          {/* <Text
            label="Daily Conversion Cap"
            name="dailyCap"
            value={dailyCap}
            onChange={(val: string) => setDailyCap(val)}
            placeholder="Daily Conversion Cap"
            className="mb-[24px]"
          /> */}
        </div>
      </div>
    </div>
  );
}
