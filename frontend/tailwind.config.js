const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Terminal Grotesque', ...defaultTheme.fontFamily.sans],
				serif: ['Redaction', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
