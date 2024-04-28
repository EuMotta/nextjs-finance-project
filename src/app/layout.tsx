import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import ScrollUp from '@/components/common/ScrollUp/ScrollUp';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Motta',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon/M.svg',
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollUp />
        {children}
      </body>
    </html>
  );
}
