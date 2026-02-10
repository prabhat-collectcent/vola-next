import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import SessionWrapper from './SessionWrapper';
import { ToastProvider } from '@/components/toast/ToastProvider';

export const metadata: Metadata = {
  title: 'Vola Ad',
  description: 'Next.js App with Inter Font',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <SessionWrapper>
          <ToastProvider>{children}</ToastProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
