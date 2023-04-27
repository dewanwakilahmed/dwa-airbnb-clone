import { Nunito } from 'next/font/google';

import './globals.css';

const inter = Nunito({ subsets: ['latin'] });

export const metadata = {
  title: 'Airbnb Clone | DWA',
  description: 'Airbnb Clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
