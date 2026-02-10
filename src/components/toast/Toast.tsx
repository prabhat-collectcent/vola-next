'use client';

import React from 'react';

export default function Toast({
  message,
  type,
  onClose,
}: {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
}) {
  return (
    <div
      className={`min-w-[260px] max-w-[350px] px-4 py-3 rounded-lg shadow-lg text-white 
        flex items-center justify-between gap-3
        ${type === 'success' && 'bg-[#D9F29B]'}
        ${type === 'error' && 'bg-[#ff9a9a]'}
        ${type === 'warning' && 'bg-yellow-600'}
        ${type === 'info' && 'bg-blue-600'}
      `}
    >
      <span className="text-sm font-medium">{message}</span>

      <button
        onClick={onClose}
        className="text-white text-lg font-bold hover:opacity-70"
      >
        ×
      </button>
    </div>
  );
}
