import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Looking.com',
  description: 'Look for hotels',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <link rel='shortcut icon' href='assets/favicon.ico' sizes='any' />
      </head>
      <body className={inter.className}>
        {/* Header */}
        <Header />
        {children}
      </body>
    </html>
  );
}
