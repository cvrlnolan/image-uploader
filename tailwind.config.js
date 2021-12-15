const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
