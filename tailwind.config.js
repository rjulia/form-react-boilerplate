/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'w-full',
    {
      pattern: /bg-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /text-+/, // 👈  This includes bg of all colors and shades
    },
    {
      pattern: /border-+/, // 👈  This includes bg of all colors and shades
    },
  ],
  theme: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
}

