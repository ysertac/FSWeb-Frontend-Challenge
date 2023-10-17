/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        x: "960px",
        y: "300px",
      },
      colors: {
        spcGreen: "#CBF281",
        spcBlue: "#4731D3",
      },
    },
  },
  plugins: [],
};
