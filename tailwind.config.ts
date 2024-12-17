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
        background: "#262626",
        foreground: "var(--foreground)",
        gray: "#808080",
        white: "#F2F2F2",
        blue: "#1E6F9F"
      },
    },
  },
  plugins: [],
} satisfies Config;
