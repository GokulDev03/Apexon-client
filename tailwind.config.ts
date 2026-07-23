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
    50: "#eaf3ee",
    100: "#d1e5da",
    200: "#a3cbb6",
    300: "#75b192",
    400: "#47976e",
    500: "#0d3320",   // primary dark green (buttons, headings accent)
    600: "#0a2919",
    700: "#081f13",
    800: "#05140c",
    900: "#030a06",
    950: "#010503",
  },
  ink: {
    50: "#faf6ef",    // cream background
    100: "#f5ead9",   // slightly deeper cream
    200: "#e8ddc8",
    300: "#d4c5a8",
    400: "#a89b7f",
    500: "#7a6f58",
    600: "#5c5342",
    700: "#3d382c",
    800: "#26221a",
    900: "#171410",
    950: "#0d0b08",
  },
  accent: {
    400: "#e3bd8d",
    500: "#d4a574",   // gold/tan accent
    600: "#c08f5a",
  },
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
