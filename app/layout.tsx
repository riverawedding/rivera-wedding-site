import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rivera Wedding 2027',
  description: 'Daniella & Victor wedding website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}