module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  plugins: [],
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
