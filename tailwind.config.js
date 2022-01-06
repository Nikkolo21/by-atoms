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
      xxs: '9px',
      xs: '10px',
      sm: '13px',
      normal: '16px',
      lg: '18px',
      xl: '24px',
      xxl: '32px',
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
      opacityGrey: 'rgba(10, 10, 10, 0.1)',
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
