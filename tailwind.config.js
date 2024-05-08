/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
     screens: {
      'xs': '460px',
      'sm': '640px',
      'md': '820px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colo:{
      'bg-shade': '#f5fcff',
    }
  },
  plugins: [],
}

