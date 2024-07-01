/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      green: {
        xlight: "#EAFAE3",
        light: "#c3f2af",
        med: "#57a040",
        dark: "#315C25",
        xdark: "#192E12",
        logo: {
          light: "#D4EFD5",
          dark: "#4BA061"
        }
      },
      gold: "#FFFADB",
      lavender: "#6876C4"
    },
    fontFamily: {
      header: ["Lustria", "serif"],
      body: ["Lato", "sans-serif"],
      tagline: ["Open Sans", "sans-serif"]
    }
  },
  plugins: [],
}
