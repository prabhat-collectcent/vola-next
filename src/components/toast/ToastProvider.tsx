'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';
import Toast from './Toast';

type ToastMessage = {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
};

const ToastContext = createContext<any>(null);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (message: string, type: ToastMessage['type']) => {
    const id = Date.now();

    // new toast at top
    setToasts((prev) => [{ id, message, type }, ...prev]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/*  TOP RIGHT STACK */}
      <div className="fixed top-5 right-5 z-[9999] flex flex-col gap-3 w-auto max-w-[90vw]">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="animate-in slide-in-from-right fade-in duration-300"
          >
            <Toast
              message={toast.message}
              type={toast.type}
              onClose={() => removeToast(toast.id)}
            />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export const useToast = () => useContext(ToastContext);