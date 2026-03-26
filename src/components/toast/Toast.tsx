'use client';

import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Toast({
  message,
  type,
  onClose,
}: {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
  onClose: () => void;
}) {
  const config = {
    success: {
      icon: <CheckCircleIcon fontSize="small" />,
      color: 'text-emerald-600',
      bg: 'bg-white/80',
      border: 'border-emerald-200',
    },
    error: {
      icon: <ErrorOutlineIcon fontSize="small" />,
      color: 'text-red-600',
      bg: 'bg-white/80',
      border: 'border-red-200',
    },
    warning: {
      icon: <WarningAmberIcon fontSize="small" />,
      color: 'text-amber-600',
      bg: 'bg-white/80',
      border: 'border-amber-200',
    },
    info: {
      icon: <InfoOutlinedIcon fontSize="small" />,
      color: 'text-blue-600',
      bg: 'bg-white/80',
      border: 'border-blue-200',
    },
  };

  const styles = config[type];

  return (
    <div
      className={`
        w-[320px] 
        flex items-start gap-3 
        px-4 py-3 
        rounded-2xl 
        shadow-lg 
        backdrop-blur-md 
        border 
        ${styles.bg} ${styles.border}
        transition-all duration-200
        hover:shadow-xl
      `}
    >
      {/* Icon */}
      <div className={`${styles.color} mt-[2px]`}>
        {styles.icon}
      </div>

      {/* Message */}
      <div className="flex-1 text-sm text-gray-800 leading-snug">
        {message}
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-700 transition text-sm font-semibold"
      >
        ✕
      </button>
    </div>
  );
}