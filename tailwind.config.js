module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontSize: {
      normal: '0.8rem'
    },
    minHeight: {
      'header': '7rem',
    },
    colors: {
      primary: '#1C6DD0',
      secondary: '#A3E4DB',
      tertiary: '#FED1EF',
      bone: '#FFF8F3',
      error: '#F05454',
      white: '#ffffff',
      grey: '#a4adb5',
      greyTransparent: 'rgba(0,0,0,0.4)',
    },
    extend: {
      borderRadius: {
        'button-lg': '18px',
        'button-md': '15px',
      }
    },
  },
  plugins: [],
}
