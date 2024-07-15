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
        accent: '#D4D4D4', // green color
        custom:'#F9F8F8',
        spacial:'#EFF6F1',
        secondaryText:'#525C60',
      },
      container: {
        center: true,
        padding: '20px',
        screens: {
          lg: "1440px",
        },
      },
      boxShadow: {
        custom: '0 20px 35px 0 rgba(167, 167, 167, 0.25)',
      },
    },
  },
  plugins: [],
}