'use client';

import React from 'react';

interface Option {
  label: string;
  value: string;
}

interface Props {
  label?: string;
  name: string; // ✅ important for grouping
  value: string;
  onChange: (val: string) => void;
  options: Option[];
  required?: boolean;
  error?: string;

  className?: string; // wrapper
  labelClassName?: string; // top label
  optionClassName?: string; // each option wrapper
  radioClassName?: string; // input radio styling
}

export default function RadioGroup({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  error,
  className = '',
  labelClassName = '',
  optionClassName = '',
  radioClassName = '',
}: Props) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Group Label */}
      {label && (
        <label className={`text-xs text-stone-900 ${labelClassName}`}>
          {label}
        </label>
      )}

      {/* Options */}
      <div className="flex gap-4">
        {options.map((opt) => (
          <label
            key={opt.value}
            className={`flex items-center gap-2 cursor-pointer ${optionClassName}`}
          >
            <input
              type="radio"
              name={name} 
              value={opt.value}
              checked={value === opt.value}
              onChange={() => onChange(opt.value)}
              required={required}
              className={`accent-[#4144E6] ${radioClassName}`}
            />
            <span className="text-sm">{opt.label}</span>
          </label>
        ))}
      </div>

      {/* Error */}
      {error && <div className="text-[11px] text-red-400 mt-1">{error}</div>}
    </div>
  );
}
