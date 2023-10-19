/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        x: "1280px",
        y: "300px",
      },
      screens: {
        mobil: "400px",
      },
      backgroundImage: {
        headerLightMode: "linear-gradient(to right, #4731D3 74% , #CBF281 70%)",
        headerDarkMode: "linear-gradient(to right, #171043 74% , #1A210B 70%)",
      },
      colors: {
        spcGreen: "#CBF281",
        spcBlue: "#4731D3",
        spcDark: "#252128",
        spcDarkBlue: "#171043",
        spcBlack: "#1A210B",
      },
    },
  },
  plugins: [],
};
