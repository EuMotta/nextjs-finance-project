import type { Metadata } from 'next';

import Header from '@/components/Header/Header';

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

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <div className="sticky top-0">
        <Header />
      </div>
      <div>{children}</div>
    </div>
  );
}
