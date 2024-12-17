import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '156': '46rem'
      },
      colors: {
        background: "#1A1A1A",
        foreground: "#333333",
        gray: "#808080",
        white: "#F2F2F2",
        blue: "#1E6F9F",
        lightBlue: "#4EA8DE",
        purple: "#8284FA"
      },
    },
  },
  plugins: [],
} satisfies Config;
