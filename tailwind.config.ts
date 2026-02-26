import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: "#1a2e22",
          800: "#243b2d",
          700: "#2d4d3a",
          600: "#3a6349",
          500: "#4a7c5c",
          400: "#6b9a7d",
          300: "#93b8a3",
          200: "#c5d9cd",
          100: "#e8f0eb",
          50: "#f4f8f5",
        },
        neutral: {
          900: "#111318",
          800: "#2a2d33",
          700: "#44474f",
          600: "#5e6269",
          500: "#7a7e85",
          400: "#a0a3a8",
          300: "#c7c9cc",
          200: "#e4e5e7",
          100: "#f2f3f4",
          50: "#fafafa",
        },
        accent: {
          700: "#8a6914",
          600: "#a67d1a",
          500: "#c49a2a",
          400: "#d4b04e",
          300: "#e4c87a",
          200: "#f0dfa8",
          100: "#faf3de",
        },
      },
      fontFamily: {
        heading: ["DM Serif Display", "Georgia", "serif"],
        body: ["DM Sans", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.05)",
        md: "0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -2px rgba(0,0,0,0.05)",
        lg: "0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -4px rgba(0,0,0,0.04)",
        xl: "0 20px 25px -5px rgba(0,0,0,0.08), 0 8px 10px -6px rgba(0,0,0,0.04)",
        gold: "0 4px 12px rgba(196,154,42,0.3)",
      },
    },
  },
  plugins: [],
};

export default config;
