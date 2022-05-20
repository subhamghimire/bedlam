module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: {
        white: '#ffffff',
        dim: '#B3B7BC',
        100: '#ffffff80',
      },
      grey: {
        grey: '#707070',
        100: '#7070700d',
        200: '#7070701a',
        300: '#70707066',
        400: '#70707080',
      },
      blue: {
        blue: '#055ca8',
        sky: '#3FA4F2',
        100: '#7fabd4',
        200: '#055ca80d',
        300: '#055ca833',
      },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    fontSize: {
      sm: '12px',
      base: '14px',
      md: '16px',
      lg: '20px',
      xl: '28px',
      xxl: '30px',
    },
    borderRadius: {
      none: '0',
      sm: '0.5px',
      DEFAULT: '5px',
      mid: '5px',
      md: '22px',
      lg: '50px',
      full: '50%',
    },
    opacity: {
      0: '0',
      10: '0.1',
      20: '0.2',
      30: '0.3',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      100: '1',
    },
    boxShadow: {
      primary: '0px 3px 6px rgba(5, 92, 168, 0.102)',
      secondary: '0px 10px 40px rgba(5, 92, 168, 0.1)',
      ternary: '0 2px 6px rgb(21 92 168 / 25%)',
    },
    backgroundColor: () => ({
      primary: '#055ca8',
      secondary: '#e5eef6',
      ternary: '#7070701a',
      white: '#ffffff',
      'light-green': '#CED3C9',
    }),
    extend: {
      boxShadow: {
        'checkout-shadow': '5px 0 10px #e4e7ed;',
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
      borderStyle: ['hover'],
    },
  },
  plugins: [],
}
