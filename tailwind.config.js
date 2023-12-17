/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  backgroundPosition: {

  },
  theme: {
    extend: {
      fontFamily: {
       workSans: ['Work Sans', 'sans-serif']
      },
      backgroundImage: {
        header : "url('../src/assets/background-pattern-desktop.png')"
      },
      colors: {
        'dark-purple' : "#2F1433",
        'light-purple': "#AD28EB"
      }
    },
  },
  plugins: [],
}

