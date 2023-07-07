/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        0.5: '0.125rem',
      },
    },
    zIndex: {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          backgroundColor: theme('colors.yellow.500'),
          padding: '1rem',
          fontWeight: 'bold',
        },
      });
    },
  ],
};
