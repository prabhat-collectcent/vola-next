import React from 'react';

interface DividerProps {
  text?: string;
  className?: string;
}

export default function Divider({ text = 'or', className = '' }: DividerProps) {
  return (
    <div className={`flex items-center my-[12px] ${className}`}>
      <div className="flex-grow border-t border-[#79747E29]" />
      {text && (
        <span className="mx-3 text-[11px] font-normal text-[#00000080]">
          {text}
        </span>
      )}
      <div className="flex-grow border-t border-[#79747E29]" />
    </div>
  );
}
