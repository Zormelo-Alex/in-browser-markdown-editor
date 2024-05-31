/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primaryDark: "#2B2D31",
        secondaryDark: "#35393F",
        textSecondary: "#7C8187",
        buttonPrimary: "#E46643",
        primaryHover: "#0F3058"
      }
    },
  },
  plugins: [],
}