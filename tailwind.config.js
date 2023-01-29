/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "header-color":"#F2F2F2",
        "header-logo":"#0671E1",
        "product-card-border":"#E7E7E7",
        "product-price-border":"#C7C7C7"
      }
    },
  },
  plugins: [],
}