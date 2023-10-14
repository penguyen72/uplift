import { cn } from '@/lib/utils';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Uplift',
  description: 'A Happiness App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, 'bg-[#F7FFE0]')}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
