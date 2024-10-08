import { Flowbite } from "flowbite-react";

const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./node_modules/flowbite/**/*.js",
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
        Flowbite,
  ],
}

