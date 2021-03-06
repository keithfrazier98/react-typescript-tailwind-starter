// tailwind.config.js
// in this file we can add the customized colors tailwind provides.

const colors = require('tailwindcss/colors')
module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode:'class',
    theme: {
      extend: {},
      colors: {
      transparent: 'transparent',
      current: 'currentColor', 
      primary: colors.primary
    }
    },
    variants: {
      extend: {},
    },
    plugins: [
   ],
  }