/** @format */

module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
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
			header: '7rem',
		},
		extend: {
			borderRadius: {
				'button-lg': '18px',
				'button-md': '15px',
			},
			boxShadow: {
				DEFAULT:
					'rgba(37, 42, 49, 0.06) 0px 4px 6px -2px, rgba(37, 42, 49, 0.1) 0px 10px 15px -3px, rgba(37, 42, 49, 0.1) 0px -1px 6px -2px',
			},
			border: {
				separator: '3px solid rgba(10, 10, 10, 0.05)',
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
				lightGrey: 'rgba(10, 10, 10, 0.06)',
			},
			flex: {
				1: '1 1 0%',
				2: '2 1 0%',
				3: '3 1 0%',
			},
		},
	},
	plugins: [require('@tailwindcss/line-clamp')],
};
