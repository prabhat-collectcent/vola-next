'use client';

import CircularProgress from '@mui/material/CircularProgress';

type Props = {
  visible: boolean;
};

export default function PageLoader({ visible }: Props) {
  if (!visible) return null;

  return (
    <div
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-transparent
        pointer-events-auto
      "
    >
      {/* click-blocking layer */}
      <div className="absolute inset-0" />

      {/* loader */}
      <div className="relative">
        <CircularProgress size={28} thickness={4} />
      </div>
    </div>
  );
}
