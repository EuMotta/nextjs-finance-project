import type { Metadata } from 'next';

import Footer from '@/components/Footer';
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
      <div className="min-h-[80vh]">{children}</div>
      <div className="sticky bottom-0">
        <Footer />
      </div>
    </div>
  );
}
