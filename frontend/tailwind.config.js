/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Instrument Serif', 'Tay Bea', 'serif']
      },
      colors: {
        'site-bg': 'var(--site-bg)',
        'site-fg': 'var(--site-fg)',
        accent: {
          yellow: '#F0B420',
          purple: '#B0A5F4',
          orange: '#F36C5A',
        }
      },
      boxShadow: {
        premium: '0 20px 50px rgba(30, 30, 30, 0.1)'
      }
    }
  },
  plugins: []
};


