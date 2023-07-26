/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#FFFFFF",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "black-500": "#000000",
        "primary-100": "#EDFCF5",
        "primary-300": "#A8F7B3",
        "primary-500": "#00BF63",
        "secondary-400": "#38B6FF",
        "secondary-500": "#76ADF5",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
    content: {
      evolvetext: "url('./assets/EvolveText.png')",
    },
  },
  plugins: [],
};
