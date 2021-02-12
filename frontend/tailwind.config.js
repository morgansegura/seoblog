module.exports = {
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],

	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				body: [
					"Open Sans",
					"-apple-system",
					"BlinkMacSystemFont",
					"Segoe UI",
					"Roboto",
					"Oxygen",
					"Ubuntu",
					"Cantarell",
					"Fira Sans",
					"Droid Sans",
					"Helvetica Neue",
					"sans-serif",
				],
			},
			zIndex: {
				"-1": "-1",
				1: "1",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
