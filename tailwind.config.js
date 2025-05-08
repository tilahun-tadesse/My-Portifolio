/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
     
      keyframes: {
        fadeInDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        }
      },
      animation: {
        'fadeInDown': 'fadeInDown 0.7s ease-out forwards',
        'fadeInUp': 'fadeInUp 0.7s ease-out forwards',
        'scaleIn': 'scaleIn 0.7s ease-out forwards'
      },
      backgroundImage: {
        'linear-to-t': 'linear-gradient(to top, var(--tw-gradient-stops))',
        'linear-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))'
      },
      zIndex: {
        '100': '100',
        '300': '300',
        '5000': '5000',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
}