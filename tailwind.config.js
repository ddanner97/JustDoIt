/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./src/components/**/*.{js,jsx}", 
    "./src/components/buttons/**/*.{js,jsx}", 
    "./src/components/inputs/**/*.{js,jsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D1453B",
        secondary: "#CBCAD0",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
