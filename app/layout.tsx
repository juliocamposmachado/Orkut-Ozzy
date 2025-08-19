'use client';

import './globals.css';
import { Inter } from 'next/font/google';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize speech synthesis
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      // Pre-load voices
      speechSynthesis.getVoices();
    }
  }, []);

  return (
    <html lang="pt-BR">
      <head>
        <title>Orkut Retrô - Conecte-se aos seus amigos</title>
        <meta name="description" content="Reviva a magia das redes sociais dos anos 2000" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}