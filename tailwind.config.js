/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'mattBlack': '#111111',
        'selectionBlack': '#1F1E1E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Montserrat']
      }
    },
  },
  plugins: [],
}