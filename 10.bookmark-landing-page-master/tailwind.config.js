/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'red_set': '#FA5959',
        'blue_set': '#5267DF',
        'green_set': '#00BA00',
      },
      spacing: {
        '74': '296px',
        '31': '124px',
      }
    },
  },
  plugins: [],
}

