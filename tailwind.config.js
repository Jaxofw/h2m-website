/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#5FB946',
        'button-primary': 'rgb(95, 185, 70)',
        'button-secondary': 'rgba(95, 185, 70, 0.15)',
        'button-hover': 'rgba(95, 185, 70, 0.5)',
        footer: '#191919',
      },
    },
  },
  plugins: [],
}
