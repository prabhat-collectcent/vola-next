'use client';

import React from 'react';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  name: string;
  error?: string;
}

export default function Textarea({
  label,
  name,
  placeholder = '',
  value,
  onChange,
  onKeyDown,
  error,
  required = false,
  rows = 3,
  ...rest
}: TextareaProps) {
  const textareaId = `textarea-${name}`;

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={textareaId}
          className="block text-xs text-stone-900 mb-1"
        >
          {label}
        </label>
      )}

      <textarea
        id={textareaId}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        required={required}
        rows={rows}
        {...rest}
        className={`w-full text-xs resize-none
          bg-white
          rounded-xl
          px-3 py-2.5
          border
          placeholder-[#00000099]
          transition-colors
          ${
            error
              ? 'border-red-400 focus:border-red-500'
              : 'border-[#79747EA8] focus:border-[#4144E6]'
          }`}
      />

      {error && (
        <div className="text-[11px] text-red-400 mt-1">
          {error}
        </div>
      )}
    </div>
  );
}
