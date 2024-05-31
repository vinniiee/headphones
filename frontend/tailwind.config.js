const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'b': '0px 6px 6px -5px rgba(0, 0, 0, 0.1)',
      },
    },
    fontFamily:{
      'sans': ['"Audiowide"', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}