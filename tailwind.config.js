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
    },
    fontFamily: {
      source: ['Source Code Pro', 'monospace'],
      belona: ['Bellota Text', 'cursive']
    },
  },
  plugins: [],
}