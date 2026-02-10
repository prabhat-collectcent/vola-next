'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface PasswordInputProps {
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
}

export default function PasswordInput({
  label = 'Password',
  name = 'password',
  placeholder = '••••••••',
  value,
  onChange,
  required = false,
  error,
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full mb-[12px]">
      {/* {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-[#0d0d0d] mb-[8px]"
        >
          {label}
        </label>
      )} */}

      <div className="relative">
        <input
          id={name}
          name={name}
          type={showPassword ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
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

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
        >
          {showPassword ? (
            <EyeOff className="w-[13px] h-[13px]" />
          ) : (
            <Eye className="w-[13px] h-[13px]" />
          )}
        </button>
      </div>

      {error && <div className="text-[11px] text-red-400 mt-1">{error}</div>}
    </div>
  );
}
