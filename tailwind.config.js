module.exports = {
  content: ["./src/**/*.{html,js,tsx,ts}"],
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
    colors: {
      primary: '#1C6DD0',
      secondary: '#A3E4DB',
      tertiary: '#FED1EF',
      bone: '#FFF8F3',
      error: '#F05454',
      white: '#ffffff',
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
