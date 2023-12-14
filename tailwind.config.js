/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			keyframes: {
				slideIn: {
					'0%': {
						transform: `translateY(-100%)`,
						opacity: 0,
					},
					'100%': {
						transform: `translateY(0)`,
						opacity: 1,
					},
				},
				slideOut: {
					'0%': {
						transform: `translateY(0)`,
						opacity: 1,
					},
					'100%': {
						transform: `translateY(100%)`,
						opacity: 0,
					},
				},
				slideLeftIn: {
					'0%': {
						transform: `translateX(-100%)`,
						opacity: 0,
					},
					'100%': {
						transform: `translateX(0)`,
						opacity: 1,
					},
				},
				slideLeftOut: {
					'0%': {
						transform: `translateX(0)`,
						opacity: 1,
					},
					'100%': {
						transform: `translateX(100%)`,
						opacity: 0,
					},
				},
				fadeIn: {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
				fadeOut: {
					'0%': {
						opacity: '1',
					},
					'100%': {
						opacity: '0',
					},
				},
			},
			animation: {
				slideIn: 'slideIn 1s ease-in-out',
				slideOut: 'slideOut 1s ease-in-out',
				slideLeftIn: 'slideLeftIn 1s ease-in-out',
				slideLeftOut: 'slideLeftOut 1s ease-out-out',
				fadeIn: 'fadeIn 1s ease-in-out',
				fadeOut: 'fadeOut 1s ease-in-out',
			},
		},
	},
	plugins: [],
};
