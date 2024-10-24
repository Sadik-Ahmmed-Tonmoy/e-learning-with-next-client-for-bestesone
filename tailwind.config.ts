import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7F56D9",
        "primary-light": "#F7F3FF",
        "gray-neutral-900": "#111927",
        "gray-neutral-500": "#667085",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        screens: {
          DEFAULT: "1290px",
        },
        center: true,
        padding: "1.2rem",
      },
      backgroundImage: {
        "black-gradient":
          "linear-gradient(178deg, rgba(0, 0, 0, 0.00) 44.14%, #000 98.09%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        xs: "540px", // min-width
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
