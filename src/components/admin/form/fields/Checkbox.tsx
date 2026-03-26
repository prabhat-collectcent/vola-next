'use client';

import React from 'react';

interface Props {
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ label, checked, name, onChange }: Props) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input
        name={name}
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e)}
        className="accent-[#4144E6]"
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
