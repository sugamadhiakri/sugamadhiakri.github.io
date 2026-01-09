/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'mattBlack': '#111111',
        'selectionBlack': '#1F1E1E',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Montserrat', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif']
      }
    },
  },
  plugins: [],
}