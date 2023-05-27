/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'w-full',
    {
      pattern: /bg-+/, 
    },
    {
      pattern: /text-+/, 
    },
    {
      pattern: /border-+/, 
    },
    {
      pattern: /w-+/, 
    },
    {
      pattern: /max-w-+/, 
    },
    {
      pattern: /h-+/, 
    },
    {
      pattern: /max-h-+/, 
    },
    {
      pattern: /m{t|r|b|l}-{size}/, 
    },
    {
      pattern: /p{t|r|b|l}-{size}/, 
    },
  ],
  theme: {
    extend: {
      textColor: ['active'],
    },
  },
  plugins: [],
}

