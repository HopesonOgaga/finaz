module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navblue: "#093967",  // Custom blue color
        navgold: "#B4A666",  // Custom gold color
        navgreen: "#29B58C", // Fixed the missing '#' for navgreen color
        navpink: "#E83F81",  // Custom pink color
        navsky: "#5398E8",   // Custom sky color
      },
      fontFamily :{
        lato: ["Lato", "sans-serif"]

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
