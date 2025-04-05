"use client";

import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
} 