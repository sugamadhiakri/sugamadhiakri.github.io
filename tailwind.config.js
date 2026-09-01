/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      colors: {
        'ink': '#4a48a8',
        'paper': '#f4f4f2',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        pen: ['"Drawably Pen"', 'Inter', 'ui-sans-serif', 'sans-serif']
      }

    },
  },
  plugins: [],
}