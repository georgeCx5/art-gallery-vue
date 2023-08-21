/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-gold': 'rgb(213, 150, 108)',
        'neo-black': 'rgb(21, 21, 21)',
        'neo-gray': 'rgb(68, 68, 68)',
        'neo-white': 'rgb(255, 255, 255)',
      },
      fontFamily: {
        'shoulders': 'Big Shoulders Display',
        'outfit': 'Outfit',
      },
      screens: {
        'TB': '768px',
        'DT': '1440px',
      },
    },
  },
  plugins: [],
}