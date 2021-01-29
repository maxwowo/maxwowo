module.exports = {
  darkMode: false,
  plugins: [],
  purge: [
    '.src/pages/**/*.{js,ts,jsx,tsx}',
    '.src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': ['11rem', '1.2'],
      },
    },
  },
  variants: {
    extend: {},
  },
}
