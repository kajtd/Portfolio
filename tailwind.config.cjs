/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs": "480px"
      },
      boxShadow: {
        'outlined-primary-shadow': '0 0 1em 0.25em #fcdda3'
      },
      colors: {
        primary: '#FCDDA3'
      }
    },
  },
  plugins: [],
}