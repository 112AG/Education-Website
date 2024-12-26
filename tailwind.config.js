/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        screens: {
          'custom': '1170px', // Custom breakpoint
        },
      },
    },
    },
  plugins: [],
}

