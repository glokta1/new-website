/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
import typography from "@tailwindcss/typography";

export default {
  content: {
    files: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  },
  theme: {
    extend: {
      colors: {
        accent: "#9f1239",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: "#9f1239",
              textDecoration: "none",
              "&:hover": {
                color: "#881337",
                textDecoration: "underline",
                textUnderlineOffset: "2px",
              },
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};
