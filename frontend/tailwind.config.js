const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {},
    fontFamily:{
      'sans': ['"Audiowide"', ...defaultTheme.fontFamily.sans],
    }
  },
  plugins: [],
}