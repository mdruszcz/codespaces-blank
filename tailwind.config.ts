import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          900: "#003366",
          700: "#005288",
          500: "#288CFA",
        },
        neutral: {
          900: "#333333",
          500: "#939399",
        },
        success: {
          600: "#2E865F",
        },
        warning: {
          500: "#FFCE01",
        },
        danger: {
          600: "#C8102E",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;