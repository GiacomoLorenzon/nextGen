/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Ensure .tsx files are included
  ],
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  theme: {
    extend: {},
  },
  plugins: [],
}