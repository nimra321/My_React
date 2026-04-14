/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B88E2F",
      },
      fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    }
    },
  },
  plugins: [],
}