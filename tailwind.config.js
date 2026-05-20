/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        linho: '#f5f1ea',
        creme: '#f1e5d6',
        damasco: '#f0d2b0',
        grafite: '#1f1a18',
        vinho: '#6d1f34',
      },
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
        display: ['Bodoni Moda', 'serif'],
      },
    },
  },
  plugins: [],
};
