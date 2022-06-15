module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary': '#f97912',
        'lightGrey': '#7c8898',
        'mediumGrey': '#252d37',
        'darkBlue': '#1f2630',
        'veryDarkBlue': '#121417',
      },
    },
    fontFamily: {
      overpass: ['Overpass', 'sans-serif'],
    },
  },
  plugins: [],
}
