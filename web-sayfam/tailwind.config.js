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
      backgroundImage: {
        headerLightMode: "linear-gradient(to right, #4731D3 70% , #CBF281 70%)",
        headerDarkMode: "linear-gradient(to right, #171043 70% , #1A210B 70%)",
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
