'use client';

import React from 'react';

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (val: string) => void;
}

export default function DateField({ label, name, value, onChange }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs text-stone-900">{label}</label>

      <div className="px-3 py-2.5 bg-white rounded-xl outline outline-[0.75px] outline-zinc-500/20 flex items-center">
        <input
          type="date"
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full text-xs outline-none bg-transparent"
        />
      </div>
    </div>
  );
}
