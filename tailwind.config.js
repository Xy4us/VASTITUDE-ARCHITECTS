/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom1: ["Merienda", "Sans"],
        custom2: ["Julius Sans One", "sans-serif"],
        custom3: ["Alumni Sans Pinstripe", "sans-serif"],
        custom4: ["Noto Serif Display", "sans-serif"],
        custom5: ["Playfair Display SC", "sans-serif"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        quaternary: "var(--color-quaternary)",
        quinary: "var(--color-quinary)",
        senary: "var(--color-senary)",
        septenary: "var(--color-septenary)",
        octonary: "var(--color-octonary)",
        nonary: "var(--color-nonary)",
        denary: "var(--color-denary)",
        tabs: "var(--color-tabs)",
      },
      screens: {
        xs: "350px",
      },
    },
  },
  plugins: [],
};
