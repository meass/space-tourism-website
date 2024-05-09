import type { Metadata } from 'next';
import './globals.css';
import { belleFair } from './fonts';
import { StateProvider } from './ContextProvider';
import NavBar from '@/app/components/NavBar';
import MobileNavBar from '@/app/components/MobileNavBar';

export const metadata: Metadata = {
  title: 'Space Tourism Website',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <StateProvider>
        <body className={belleFair.className}>
          <NavBar />
          <MobileNavBar />
          {children}
        </body>
      </StateProvider>
    </html>
  );
}
