'use client';

import CircularProgress from '@mui/material/CircularProgress';

interface SubmitProps {
  text?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Submit({
  text = 'Submit',
  loading = false,
  disabled = false,
  onClick,
  className = '',
}: SubmitProps) {
  const isDisabled = loading || disabled;

  return (
    <button
      type="submit"
      disabled={isDisabled}
      onClick={onClick}
      className={`
        px-9 py-1.5
        rounded-[40px]
        outline outline-1 outline-offset-[-1px]
        flex items-center justify-center gap-2.5
        transition
        ${
          isDisabled
            ? 'bg-[#EDE7F6] outline-[#EDE7F6] cursor-not-allowed'
            : 'bg-[#4144E6] outline-[#4144E6] hover:opacity-90 cursor-pointer'
        }
        ${className}
      `}
    >
      {loading && (
        <CircularProgress size={18} thickness={4} sx={{ color: '#FFFFFF' }} />
      )}

      {!loading && (
        <span className="text-white text-base font-normal">{text}</span>
      )}
    </button>
  );
}
