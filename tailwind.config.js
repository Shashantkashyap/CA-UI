// tailwind.config.js
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        heading: ["Outfit", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#eef2ff",
          100: "#e0e7ff",
          600: "#2563eb",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        accent: {
          50: "#fff7ed",
          100: "#ffedd5",
          500: "#f97316",
        },
        secondary: {
          50: "#f9fafb",
          600: "#475569",
          700: "#334155",
          900: "#1e293b",
        },
        customPurple: "rgb(240, 132, 252)",
        white: "#ffffff",
      },

      // 🔽 Add this below your existing `colors` block
      keyframes: {
        "text-slide": {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        "text-slide": "text-slide 10s linear infinite",
      },
    },
  },
  plugins: [],
};
