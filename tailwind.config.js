/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090a0c",
        surface: {
          DEFAULT: "#0f1115",
          elevated: "#14161c",
          hover: "#1a1d24",
          border: "rgba(255, 255, 255, 0.08)",
          "border-hover": "rgba(255, 255, 255, 0.18)",
        },
        muted: {
          DEFAULT: "#8f929d",
          foreground: "#555865",
          light: "#b4b7c4",
        },
        accent: {
          DEFAULT: "#ffffff",
          emerald: "#10b981",
          amber: "#f59e0b",
          blue: "#38bdf8",
          purple: "#a855f7",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"Geist Mono"',
          '"Fira Code"',
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
        wide: "0.04em",
        widest: "0.12em",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.05)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.08)",
        "card-hover": "0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.16)",
        glow: "0 0 30px -5px rgba(255, 255, 255, 0.07)",
      },
      animation: {
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
