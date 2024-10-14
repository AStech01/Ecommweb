

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    flowbite.content(),
  ],
   theme: {
    extend: {
      colors: {
        neutralSilver: "#F7F7FA",  // Corrected hex code format
        neutralDGray: "#4D4D4D",
        brandPrimary: "#4CAF4F",
        neutralGray: "#717171",
        gray900: "#18191F"
      }
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};