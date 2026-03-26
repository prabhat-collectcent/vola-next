'use client';

import React from 'react';

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  warning?: string
}

export default function DateField({ label, name, value, onChange, error, warning }: Props) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-xs text-stone-900">{label}</label>

      <div className="px-3 py-2.5 bg-white rounded-xl outline outline-[0.75px] outline-zinc-500/20 flex items-center">
        <input
          type="date"
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          className="w-full text-xs outline-none bg-transparent"
        />

      </div>
              {error && <div className="text-[11px] text-red-400 mt-1">{error}</div>}
              {warning && <div className="text-[11px] text-amber-400 mt-1">{warning}</div>}


    </div>



    
  );
}
