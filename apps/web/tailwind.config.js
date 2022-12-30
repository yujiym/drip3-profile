const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../packages/ui/components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman'
    },
    extend: {
      colors: {
        primary: `var(--c-primary)`,
        semiwhite: `var(--c-semiwhite)`
      },
      fontFamily: {
        ss: ['var(--font-silkscreen)']
      }
    }
  },
  plugins: []
}
