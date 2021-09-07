module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mRed: {
          light: '#f5afb4',
          DEFAULT: '#E63643',
          dark: '#5c161b',
          hover: '#cf313c',
        }
      },
    },
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      Bebas: ['Bebas Neue', 'sans-serif']
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1440px"
      }
    },
  },
  variants: {
    extend: {
      translate: ['active'],
    },
  },
  plugins: [],
}
