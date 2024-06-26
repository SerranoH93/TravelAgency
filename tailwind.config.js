/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../assets/img/sanFrancisco.jpg')", 
        'sanFranciscoDesktop': "url('../assets/img/sanFranciscoDesktop.jpg')", 
        'yosemite': "url('../assets/img/yosemite.jpg')", 
        'LA': "url('../assets/img/LA.jpg')", 
        'seattle': "url('../assets/img/seattle.jpg')", 
        'new_york': "url('../assets/img/new_york.jpg')", 
        'norway': "url('../assets/img/norway.jpg')", 
        'sydney': "url('../assets/img/sydney.jpg')", 
        'miami': "url('../assets/img/miami.jpg')", 
        'switzerland': "url('../assets/img/switzerland.jpg')", 
        'bali': "url('../assets/img/bali.jpg')", 
        'chicago': "url('../assets/img/chicago.jpg')", 
        'europe': "url('../assets/img/europe.jpg')", 
        'iceland': "url('../assets/img/iceland.jpg')"
      },
      backgroundColor: theme =>({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9', }), 
        textColor:{ 
          'primary': '#CC2D4A', 
          'secondary': '#8FA206',
          'tertiary': '#61AEC9'
        },
        fontFamily: {
          Montserrat:['Montserrat', 'sans-serif']
        }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
};