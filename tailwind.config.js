/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        customGray: '#1a202c ',
        textbg:"#63A27A",
      },
      fontFamily: {
        jua: ['Jua', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

