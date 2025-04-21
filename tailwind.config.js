const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        alice:["Alice" , "serif"],
        lora:["Lora" , "serif"],
        Sacramento:["Sacramento" , "serif"],
        Inter:["Inter" , "sans-serif"],
      }
    },
  },
  plugins: [],
}