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
        cream: {
          50: "#FCFBF9",
          100: "#FAF9F6", // Primary background
          200: "#F2EFE8", // Secondary containers
          300: "#E8E4DC", // Borders
          400: "#D3CEC4",
        },
        ink: {
          900: "#242424", // Primary text
          700: "#45433F",
          500: "#77736C", // Muted text
          300: "#A8A49C",
        },
        accent: {
          warm: "#8C6A43",
          olive: "#4A5D4E",
          terracotta: "#A35C4A",
          sage: "#6E8272",
        },
      },
      fontFamily: {
        serif: ['"Newsreader"', "Charter", '"Bitstream Charter"', "Georgia", "serif"],
        sans: [
          '"Plus Jakarta Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        mono: [
          '"JetBrains Mono"',
          '"Geist Mono"',
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      boxShadow: {
        editorial: "0 1px 3px 0 rgba(36, 36, 36, 0.04), 0 1px 2px -1px rgba(36, 36, 36, 0.03)",
        card: "0 4px 20px -2px rgba(36, 36, 36, 0.05), 0 2px 6px -1px rgba(36, 36, 36, 0.03)",
        "card-hover": "0 12px 32px -4px rgba(36, 36, 36, 0.08), 0 4px 12px -2px rgba(36, 36, 36, 0.04)",
      },
    },
  },
  plugins: [],
};
