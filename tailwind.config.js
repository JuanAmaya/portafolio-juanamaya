/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '60': '60'
      },
      colors: {
        "main-green": "#283B39",
        "sub-green": "#5E7674"
      }
    },
  },
  plugins: [],
};
