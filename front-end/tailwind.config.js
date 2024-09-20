/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#2B85FF",
        "secondary":"#EF863E"
      },
      fontFamily: {
        'roboto': ['Roboto Condensed Variable'],
        'syne': ['Syne Variable'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}

