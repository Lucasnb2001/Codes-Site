/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {'josefin': ['Josefin Sans', 'sans-serif'],
      colors: {
        'custom-green': '#DFEFA6',
      },
      },
      
  },
  plugins: [ require('@tailwindcss/line-clamp'),],
}

