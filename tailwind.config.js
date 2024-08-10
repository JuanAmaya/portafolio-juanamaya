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
        "sub-green": "#5E7674",
        'underline-green': '#4B5F5D',
      },
      padding: {
        '50rem': '50rem',
      },
    },
  },
  plugins: [],
};
