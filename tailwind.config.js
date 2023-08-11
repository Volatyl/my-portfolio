/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        // spin 5 times 1s equals 5 seconds
        'spin-short': 'spin 1s ease-in-out 1'
      }
    },
  },
  plugins: [],
}