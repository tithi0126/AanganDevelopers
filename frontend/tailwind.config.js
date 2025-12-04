/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      colors: {
        // Brand palette from user
        darkBlue: '#222831', // #222831
        lightBlueGrey: '#393E46', // #393E46
        darkBeige: '#948979', // #948979
        beige: '#DFD0B8', // #DFD0B8
        // Existing accents
        amberSoft: '#fbbf77',
        indigoSoft: '#6366f1'
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(223, 208, 184, 0.35), transparent 55%), radial-gradient(circle at bottom right, rgba(57, 62, 70, 0.45), transparent 55%)'
      },
      boxShadow: {
        glass: '0 18px 45px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
};


