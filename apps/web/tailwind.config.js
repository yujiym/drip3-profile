const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: `var(--c-primary)`,
        semiwhite: `var(--c-semiwhite)`
      },
      fontFamily: {
        ss: ['var(--font-silkscreen)', ...fontFamily.cursive]
      }
    }
  },
  plugins: []
}
