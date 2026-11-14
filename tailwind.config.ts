import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F9FD",
        surface: "#FFFFFF",
        brand: {
          50: "#FAF5FF",
          100: "#F3E8FF",
          200: "#E9D5FF",
          300: "#D8B4FE",
          400: "#C084FC",
          500: "#A855F7",
          600: "#7C3AED", // Buildicy purple primary
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
          950: "#2E1065",
        },
        fintech: {
          dark: "#12141D",
          card: "#FFFFFF",
          subtle: "#F8FAFC",
          muted: "#64748B",
          border: "#E2E8F0",
          green: "#10B981",
          rose: "#F43F5E",
          amber: "#F59E0B",
          blue: "#3B82F6",
        }
      },
      boxShadow: {
        'fintech-xs': '0 1px 2px 0 rgba(16, 24, 40, 0.04)',
        'fintech-sm': '0 2px 8px -1px rgba(16, 24, 40, 0.05), 0 1px 3px -1px rgba(16, 24, 40, 0.03)',
        'fintech': '0 8px 24px -4px rgba(16, 24, 40, 0.06), 0 2px 6px -2px rgba(16, 24, 40, 0.03)',
        'fintech-lg': '0 16px 36px -6px rgba(124, 58, 237, 0.08), 0 4px 12px -2px rgba(16, 24, 40, 0.04)',
        'fintech-xl': '0 24px 48px -12px rgba(124, 58, 237, 0.12)',
        'purple-glow': '0 8px 24px -4px rgba(124, 58, 237, 0.35)',
        'dark-glow': '0 8px 24px -4px rgba(18, 20, 29, 0.3)',
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "system-ui", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        syne: ["Syne", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
