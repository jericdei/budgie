/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6C4E31",
          100: "#FFEAC5",
          200: "#FFDBB5",
          400: "#6C4E31",
          600: "#603F26",
        },
      },
    },
  },
  plugins: [],
};
