import type { Config } from "tailwindcss";

/**
 * Apexon Development — Design System Tokens
 * Single source of truth for color, type, spacing, radius, and shadow scales.
 * Reference: Website Blueprint, Step 10 (Design System).
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#eef0fd",
          100: "#dde1fb",
          200: "#b7bff6",
          300: "#8f9cf1",
          400: "#6d5ae6",
          500: "#4f46e5", // Primary accent
          600: "#4338ca",
          700: "#3730a3",
          800: "#2e2a80",
          900: "#211d5c",
        },
        accent: {
          50: "#fff4e5",
          100: "#ffe4bf",
          200: "#fcd08f",
          300: "#fbb35e",
          400: "#f9973a",
          500: "#f59e0b", // Secondary/warm accent
          600: "#e0820a",
          700: "#b3630a",
          800: "#8a4a0e",
          900: "#5c3208",
        },
        coral: {
          400: "#fb7185",
          500: "#f43f5e",
        },
        ink: {
          50: "#fafafa",
          100: "#f4f4f6",
          200: "#e5e5ea",
          300: "#c9c9d1",
          400: "#9a9aa6",
          500: "#6b7280",
          600: "#4b4b57",
          700: "#33333d",
          800: "#1f1f26",
          900: "#111827",
          950: "#0b0b10",
        },
        success: "#22c55e",
        warning: "#f59e0b",
        error: "#ef4444",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        xs: ["0.8rem", { lineHeight: "1.5" }],
        sm: ["0.9rem", { lineHeight: "1.6" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.563rem", { lineHeight: "1.4" }],
        "3xl": ["1.953rem", { lineHeight: "1.3" }],
        "4xl": ["2.441rem", { lineHeight: "1.2" }],
        "5xl": ["3.052rem", { lineHeight: "1.15" }],
        "6xl": ["3.815rem", { lineHeight: "1.1" }],
        "7xl": ["4.769rem", { lineHeight: "1.05" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        section: "6rem",
        "section-lg": "8rem",
      },
      borderRadius: {
        sm: "8px",
        DEFAULT: "12px",
        card: "16px",
        lg: "24px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,11,16,0.04), 0 8px 24px rgba(11,11,16,0.06)",
        raised: "0 2px 4px rgba(11,11,16,0.06), 0 16px 40px rgba(11,11,16,0.10)",
        glow: "0 0 0 1px rgba(79,70,229,0.15), 0 8px 32px rgba(79,70,229,0.20)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
