/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      boxShadow: {
        "outlined-primary-shadow": "0 0 0 16px #9f95ff",
        "outlined-primary-shadow-small": "0 0 0 4px #9f95ff",
      },
      colors: {
        primary: "#9f95ff",
        background: "#FEFDF1",
      },
    },
  },
  plugins: [],
};
