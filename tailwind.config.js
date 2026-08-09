/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			backdropBlur: {
				sm: '4px',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Outfit', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
