const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/react-lib/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: '[data-theme="dark"]',
  theme: {
    screens: {
      xs: '600px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        primary: `var(--c-primary)`,
        purple: `var(--c-purple)`,
        orange: `var(--c-orange)`,
        magenda: `var(--c-magenda)`,
        green: `var(--c-green)`,
        blue: `var(--c-blue)`,
        yellow: `var(--c-yellow)`,
        semiwhite: `var(--c-semiwhite)`,
        semiblack: `var(--c-semiblack)`,
        gray: `var(--c-gray)`,
        cream: `var(--c-cream)`,
      },
      fontFamily: {
        sans: ['var(--font-worksans)', ...fontFamily.sans],
        ss: ['var(--font-silkscreen)', ...fontFamily.sans],
        mono: ['var(--font-mono)', ...fontFamily.mono],
      },
    },
  },
  plugins: [
    // function ({ addComponents }) {
    //   addComponents({
    //     ".container": {
    //       maxWidth: "100%",
    //       "@screen sm": {
    //         maxWidth: "640px",
    //       },
    //       "@screen md": {
    //         maxWidth: "768px",
    //       },
    //     },
    //   });
    // },
  ],
}
