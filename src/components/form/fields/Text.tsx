'use client';

import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // 🔥 Now optional
  name: string;
  error?: string;
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
  required = false,
  ...rest
}: InputProps) {
  const inputId = `input-${name}`;

  return (
    <div className="w-full mb-[12px]">
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
        className={`w-full h-[37px] text-xs
          bg-white
          rounded-[93px]
          px-3 py-2.5
          outline outline-[0.75px] outline-offset-[-0.75px]
          placeholder-[#00000099]
          transition
          ${
            error
              ? 'outline-red-400'
              : 'outline-[#79747EA8] focus:outline-[#4144E6]'
          }`}
      />

      {error && <div className="text-[11px] text-red-400 mt-1">{error}</div>}
    </div>
  );
}
