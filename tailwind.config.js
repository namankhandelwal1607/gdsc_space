/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nova: ['Lexend', 'sans-serif', 'Poppins', 'Nova Square'],
      },
      letterSpacing: {
        wider: '0.1em', // Adjust this value as needed
      },
    },
  },
  plugins: [],
}
