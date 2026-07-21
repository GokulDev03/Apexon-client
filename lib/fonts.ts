import { Inter, JetBrains_Mono } from "next/font/google";

/**
 * Central font loader. Import these in app/layout.tsx and apply the
 * generated CSS variables to <html>/<body> so they match the tokens
 * declared in tailwind.config.ts (--font-display / --font-body / --font-mono).
 */
export const fontBody = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const fontDisplay = Inter({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
