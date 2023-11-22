/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      boxShadow: {
        "outlined-primary-shadow": "0 0 0 12px #9966CC",
        "outlined-primary-shadow-small": "0 0 0 4px #9966CC",
      },
      colors: {
        primary: "#9966CC",
        background: "#FEFDF1",
      },
    },
  },
  plugins: [],
};
