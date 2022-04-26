const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    `${__dirname}/src/js,jsx,ts,tsx}`,
    `${__dirname}/../gatsby-theme-adr/src/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      black: colors.black,
      gray: colors.gray,
      blue: {
        100: '#DBEEFB',
        300: '#49ACE9',
        500: '#177AB6', // Base color.
        700: '#10547F',
        800: '#093049',
      },
      charcoal: {
        100: '#94C1B7',
        300: '#799DB9',
        500: '#4D7593',
        600: '#38556B',
        700: '#223340', // Base color.
        800: '#0E151B', // Base color.
      },
      red: {
        100: '#FFD6D6',
        200: '#FF9999',
        300: '#FF5c5c',
        400: '#FA0000', // Base color.
        500: '#CC0000',
        600: '#8F0000',
        700: '#520000',
        800: '#290000',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
