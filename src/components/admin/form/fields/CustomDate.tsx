'use client';

import React from 'react';
import DatePicker from 'react-datepicker';
// @ts-ignore
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  label: string;
  name: string;
  value: string; // expecting YYYY-MM-DD or ISO
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  warning?: string;
}

export default function DateField({
  label,
  name,
  value,
  onChange,
  error,
  warning,
}: Props) {

  // Convert string → Date
  const selectedDate = value ? new Date(value) : null;

  const handleChange = (date: Date | null) => {
    const formatted = date
      ? date.toISOString().split('T')[0] // keep backend format YYYY-MM-DD
      : '';

    // Create synthetic event to match your existing API
    const syntheticEvent = {
      target: {
        name,
        value: formatted,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(syntheticEvent);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs text-stone-900">{label}</label>

      <div className="px-3 py-2.5 bg-white rounded-xl outline outline-[0.75px] outline-zinc-500/20 flex items-center">
        <DatePicker
          selected={selectedDate}
          onChange={handleChange}
          dateFormat="dd-MM-yyyy"
          placeholderText="DD-MM-YYYY"
          className="w-full text-xs outline-none bg-transparent"
          wrapperClassName="w-full"
        />
      </div>

      {error && (
        <div className="text-[11px] text-red-400 mt-1">{error}</div>
      )}
      {warning && (
        <div className="text-[11px] text-amber-400 mt-1">{warning}</div>
      )}
    </div>
  );
}