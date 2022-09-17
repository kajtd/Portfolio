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
        'outlined-primary-shadow': '0 0 0 12px #fcdda3'
      },
      colors: {
        primary: '#FCDDA3'
      }
    },
  },
  plugins: [],
}