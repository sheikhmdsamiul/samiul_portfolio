/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#F6F2E9",
          deep: "#EDE7D6",
          line: "#DDD6C3",
        },
        ink: {
          DEFAULT: "#111A2A",
          soft: "#38435A",
          mute: "#5F6B7D",
          faint: "#8A94A4",
        },
        accent: {
          DEFAULT: "#E4570E",
          dark: "#BC4307",
          soft: "#FBEADd80",
          wash: "#FBEDE0",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "Consolas", "monospace"],
      },
      boxShadow: {
        blk: "5px 5px 0 0 #111A2A",
        "blk-sm": "3px 3px 0 0 #111A2A",
        "blk-lg": "9px 9px 0 0 #111A2A",
        orange: "6px 6px 0 0 #E4570E",
        "orange-sm": "3px 3px 0 0 #E4570E",
        orangeR: "-6px 6px 0 0 #E4570E",
        paper: "8px 8px 0 0 #F6F2E9",
        soft: "0 24px 60px -28px rgba(17, 26, 42, 0.35)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};