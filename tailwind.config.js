/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: 'montserrat',
        montserratThin: 'montserrat-thin',
        montserratBold: 'montserrat-bold',
        grandCru: 'grand-cru'
      },
    }
  },
  plugins: [],
}
