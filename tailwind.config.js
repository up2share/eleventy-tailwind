/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
	content: ["./_includes/**/*.{html,njk,md}", "./content/**/*.{html,njk,md}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}

