'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  error?: string;
  warning?: string;
  className?: string;
}

export default function Input({
  label,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onKeyDown,
  error,
  warning,
  required = false,
  className = '',
  ...rest
}: InputProps) {
  const inputId = `input-${name}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-[13px] mb-[8px] text-[#1E1E1E]"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        required={required}
        {...rest}
        className={`
          w-full h-[41px] text-xs
          bg-white
          rounded-[13px]
          px-3 py-3
          border
          placeholder-[#00000099]
          transition-colors
          ${
            error
              ? 'border-red-400 focus:border-red-500'
              : 'border-[#79747EA8] focus:border-[#4144E6]'
          }
          ${className}
        `}
      />

      {error && <div className="text-[11px] text-red-400 mt-1">{error}</div>}
      {warning && <div className="text-[11px] text-amber-400 mt-1">{warning}</div>}

    </div>
  );
}
