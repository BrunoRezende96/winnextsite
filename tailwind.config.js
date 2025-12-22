/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      colors: {
        bgPrimary: '#0098c0',
        bgSecundary: '#31c684',
        bgThird: '#69e178',
      },

      padding:{
        'DPad': '2rem',
      },

      screens: {
        md2: {min: "810px", max: "1023px"},
        mid: { min: "450px", max: "700px" },   // seu breakpoint personalizado
      },

    },

  },
  plugins: [],
}
