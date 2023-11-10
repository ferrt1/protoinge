/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00759c',
        'secondary': '#004f69',
        'semiBlack': '#011627',
        'lightBlue': '#7dd3fc',
      },
    },
  },
  plugins: [],
}

