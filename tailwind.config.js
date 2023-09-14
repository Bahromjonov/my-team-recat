/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'midnightGreen':'#014E56',
        'lightCoral':'#F67E7E',
      },
      spacing: {
        '73':'73px'
      },
      fontFamily:{
        'Livvic': ['Livvic', "sans-serif"]
      }
    },
  },
  plugins: [],
}