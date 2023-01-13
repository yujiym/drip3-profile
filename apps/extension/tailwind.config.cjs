/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/content/components/**/*.{jsx,tsx}",
    "./src/devtools/**/*.{html,js,ts,jsx,tsx}",
    "./src/newtab/**/*.{html,js,ts,jsx,tsx}",
    "./src/options/**/*.{html,js,ts,jsx,tsx}",
    "./src/panel/**/*.{html,js,ts,jsx,tsx}",
    "./src/popup/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
