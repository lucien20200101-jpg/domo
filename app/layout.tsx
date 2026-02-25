import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Domo',
  description: 'A static Next.js App Router starter with Tailwind CSS.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
