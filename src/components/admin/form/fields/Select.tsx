'use client';

import React, { useState, useRef, useEffect } from 'react';

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  name: string;
  options: SelectOption[];
  value?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  error?: string;
  required?: boolean;

  className?: string;
  wrapperClassName?: string;
  dropdownClassName?: string;
  labelClassName?: string;
}

export default function Select({
  label,
  name,
  options,
  value,
  placeholder = 'Select an option',
  onChange,
  error,
  required = false,
  className = '',
  wrapperClassName = '',
  dropdownClassName = '',
  labelClassName = '',
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectId = `select-${name}`;

  return (
    <div className={`w-full ${wrapperClassName}`}>
      {/* Label */}
      <label
        htmlFor={selectId}
        className={`block text-[13px] mb-[8px] text-[#1E1E1E] ${labelClassName}`}
      >
        {label}
      </label>

      {/* RELATIVE WRAPPER */}
      <div ref={wrapperRef} className="relative">
        {/* Select Box */}
        <div
          onClick={() => setOpen(!open)}
          className={`
            w-full h-[37px] text-[12px] border rounded-[13px]
            px-[16px] py-[8px] cursor-pointer flex items-center
            transition-colors
            ${value ? 'text-[#0d0d0d]' : 'text-[#00000099]'}
            ${error ? 'border-red-500' : 'border-[#79747EA8]'}
            ${className}
          `}
        >
          {value
            ? options.find((opt) => opt.value === value)?.label
            : placeholder}
        </div>

        {/* Dropdown */}
        {open && (
          <div
            className={`
              absolute top-[45px] left-0
              w-full
              bg-white shadow-lg rounded-[13px]
              py-[6px] z-50 border border-[#E6E6E6]
              ${dropdownClassName}
            `}
          >
            {options.map((opt) => (
              <div
                key={opt.value}
                onClick={() => {
                  onChange?.(opt.value);
                  setOpen(false);
                }}
                className="
                  px-[16px] py-[10px] text-sm text-[#333]
                  hover:bg-[#f9f9f9]
                  rounded-[12px] cursor-pointer
                "
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Error */}
      {error && <div className="text-sm text-[#ff9a9a] mt-1">{error}</div>}
    </div>
  );
}
