module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			sans: ['Avenir', 'Arial', 'sans-serif'],
		},
		extend: {
			fontSize: {
        xxxxs: '.5rem',
				xxxs: '.6rem',
				xxs: '.7rem',
			},
			width: {
				'3/10': '30%',
			},
			maxWidth: {
				10: '10rem',
				12: '12rem',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
