/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        mint: '#d9f6e8',
        cream: '#fffaf2',
        gold: '#dbc8a1',
        warm: '#f1ece4',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glass: '0 20px 45px rgba(129, 147, 121, 0.15)',
      },
    },
  },
  plugins: [],
}
