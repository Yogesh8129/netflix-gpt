/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          /* Firefox */
          'scrollbar-width': 'none',
          /* Chrome, Safari, and Edge */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      });
    },
  ],
}

