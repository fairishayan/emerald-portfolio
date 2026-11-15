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
        emeraldDark: "#0a1f18",
        emeraldMid: "#11362a",
        emeraldDeep: "#0d2a20",
        mintText: "#e2f1ea",
        mintHeading: "#d4f0e5",
        mintMuted: "#85b8a5",
        mintAccent: "#5eead4",
        emeraldAccent: "#34d399",
      },
      borderRadius: {
        "2.5xl": "2.5rem",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
