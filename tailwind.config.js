module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'palette-orange-light': '#ffd8c0',
        'palette-grey': '#4C515D',
        'palette-grey-light': '#CFDCDE',
      },
    },
    fontFamily: {
      'poppins': 'Poppins',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      'widest-2xl': '0.355em',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
