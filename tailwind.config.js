/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#0079ff",
				secondary: "#697c9a",
				"text-primary": "#2b3442",
				"text-secondary": "#4b6a9b",
				background: "#f6f8ff",
				"background-secondary": "#fefefe",

				"background-dark": "#141d2f",
				"background-secondary-dark": "#1e2a47",
				"text-primary-dark": "#ffffff",

				error: "#f74646",
			},
			fontFamily: {
				sans: "Space Mono",
			},
		},
	},
	darkMode: "class",
	plugins: [],
};
