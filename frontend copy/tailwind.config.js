/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Habilitar modo oscuro basado en una clase en el <html>
  theme: {
    extend: {
      colors: {
        'main-color': 'var(--main-color)',
        'dark-bg': 'var(--dark-bg)',
        'sub-color': 'var(--sub-color)',
        'contrast-color': 'var(--contrast-color)',
        'sub-contrast': 'var(--sub-contrast)',
      },
      fontFamily: {
        'spartan': ['Spartan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}