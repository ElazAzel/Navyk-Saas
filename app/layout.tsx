import './globals.css';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import Providers from './providers';
import { AuthProvider } from '@/context/auth-context';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
  title: 'NAVYK - Платформа для развития навыков и карьеры',
  description: 'Единая экосистема для студентов, компаний и университетов Казахстана, где талант встречается с возможностями',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col`}>
        <Providers>
          <AuthProvider>
            {children}
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
