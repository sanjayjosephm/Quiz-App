/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'custom': '16px',
        'button': '14px',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Satoshi': ['Satoshi', 'sans-serif']
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
})

