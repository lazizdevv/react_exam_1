/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        open:['Open Sans', 'sans-serif'],
        tail:['Yellowtail', 'cursive'],
      },
      colors: {
        primary: '#274C5B', // dark gray color
        secondary: '#7EB693', // salmon color
        accent: '#274C5B', // green color
        custom:'#F9F8F8',
      },
      container: {
        center: true,
        padding: '20px',
        screens: {
          lg: "1440px",
        },
      },
    },
  },
  plugins: [],
}