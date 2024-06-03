const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'b': '0px 6px 6px -5px rgba(0, 0, 0, 0.1)',
        'dark': '5px 5px 20px 10px rgba(88, 0, 164, 0.6), 5px 2px 20px 10px rgba(185, 7, 179, 0.1)',
        
      },
      fontSize:{
        '2xs':'0.6rem',
        '3xs':'0.5em'
      }
    },
    fontFamily:{
      'sans': ['"Audiowide"', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}