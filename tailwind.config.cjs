/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {},

		/*
		!!! работает неисправно
		*/

		// colors: {
		// 	'my-green': '#a3d716',
		// 	'my-green-darker': '#85af12',
		// 	'my-violet': '#4f4a76',
		// 	'my-violet-darker': '#3e3a5c',
		// 	'my-pink': '#a9205f',
		// 	'my-pink-darker': '#83194a',
		// 	'my-gray': '#333333',
		// 	'my-gray-darker': '#222222',
		// 	'my-white': '#f0f0f0',
		// 	'my-white-darker': '#aaaaaa',
		// 	'my-mint': '#e4f0e3',
		// 	'my-mint-darker': '#c0dfbe',
		// },
	},
	plugins: [],
}
