'use client';

import React from 'react';

interface CheckboxProps {
  label: string;
  name: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

export default function Checkbox({
  label,
  name,
  checked = false,
  onChange,
  required = false,
  error,
}: CheckboxProps) {
  return (
    <div>
      {/* Outer label wraps checkbox + text so click target is consistent and alignment is centered */}
      <label className="inline-flex items-center cursor-pointer">
        {/* wrapper to allow absolute tick inside */}
        <div className="relative flex items-center justify-center">
          <input
            id={name}
            name={name}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            required={required}
            className={`appearance-none h-[16px] w-[16px] rounded border
              ${error ? 'border-red-500' : 'border-[#0d0d0d]'}
              checked:bg-black checked:border-black
              cursor-pointer transition-colors duration-150 peer`}
          />
          {/* centered white tick; uses peer so it's visible only when checked */}
          <span
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none text-white text-[12px] font-bold opacity-0 peer-checked:opacity-100 transition-opacity duration-150"
          >
            ✓
          </span>
        </div>

        {/* label text aligned vertically center with checkbox */}
        <span className="ml-2 select-none text-[#0d0d0d]">{label}</span>
      </label>

      {/* error text below (keeps layout tidy) */}
      {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
    </div>
  );
}
