/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      neueMontreal: ['Neue Montreal', 'sans-serif'],
    },},
  },
  plugins: [],
}

