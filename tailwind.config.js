/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      header: "#4F6D7A",
      white: "#FFFF",
      main: "#b5c7c3",
      firstSec: "#D9D9D9",
    },
    fontFamily: {
      source: ['Source Code Pro', 'monospace'],
      belona: ['Bellota Text', 'cursive']
    },
  },
  plugins: [],
}