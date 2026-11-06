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
        background: "#FAF8FF",
        surface: "#FFFFFF",
        "surface-2": "#F3E8FF",
        brutal: {
          purple: "#7c3aed",
          "purple-light": "#ede9fe",
          "purple-dark": "#5b21b6",
          yellow: "#facc15",
          green: "#10b981",
          red: "#f43f5e",
          black: "#000000",
          card: "#ffffff"
        }
      },
      boxShadow: {
        'brutal-xs': '1.5px 1.5px 0px 0px #000000',
        'brutal-sm': '2px 2px 0px 0px #000000',
        'brutal': '4px 4px 0px 0px #000000',
        'brutal-md': '5px 5px 0px 0px #000000',
        'brutal-lg': '6px 6px 0px 0px #000000',
        'brutal-xl': '8px 8px 0px 0px #000000',
        'brutal-purple': '4px 4px 0px 0px #7c3aed',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
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
