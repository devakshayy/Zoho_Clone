/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textUnderlineOffset : {
        8: '22px',
        6: '9px',
      }
    },
  },
  plugins: [],
}