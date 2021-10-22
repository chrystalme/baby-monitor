module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#b3e1f6',
        DEFAULT: '#8ed3f1',
        dark: '#68c4ed',
      },
      green: {
        light: '#d5f4d4',
        DEFAULT: '#c1efbe',
        dark: '#ace9a9',
      },
      gray: {
        darkest: '#5b8092',
        dark: '#74879b',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      '2xl': '1440px',
    },
    fontFamily: {
      sans: ['Helvetica Neue', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      padding: ['hover'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
