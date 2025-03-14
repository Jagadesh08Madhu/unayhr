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
      }
    },
  },
  plugins: [],
}