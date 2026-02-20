'use client';

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateProps {
  name: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}

export default function DateField({ name, value, onChange, error }: DateProps) {
  const parsedDate = value ? new Date(value) : null;

  return (
    <div className="w-full mb-[12px]">
      <DatePicker
        selected={parsedDate}
        onChange={(date: Date | null) =>
          onChange && onChange(date ? date.toISOString().split('T')[0] : '')
        }
        placeholderText="Select date"
        dateFormat="MM/dd/yyyy"
        className={`
          w-full h-[37px] text-[12px]
          border rounded-[13px]
          px-[16px] py-[8px]
          border-[#00000026]
          focus:outline-none
        `}
        wrapperClassName="w-full"
      />

      {error && <div className="text-sm text-[#ff9a9a] mt-1">{error}</div>}
    </div>
  );
}
