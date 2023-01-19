const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/content/components/**/*.{jsx,tsx}',
    './src/pages/devtools/**/*.{html,js,ts,jsx,tsx}',
    './src/pages/newtab/**/*.{html,js,ts,jsx,tsx}',
    './src/pages/options/**/*.{html,js,ts,jsx,tsx}',
    './src/pages/panel/**/*.{html,js,ts,jsx,tsx}',
    './src/pages/popup/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
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
        semiwhite: `var(--c-semiwhite)`,
      },
      fontFamily: {
        sans: ['Nunito', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}
