import { type Config } from 'tailwindcss'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

export default <Config>{
  content: ['./src/**/*.vue'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        'primary':'#F06000',
        'accent': '#0F9095',
        'accent-light': '#71d5d9',
        'grey': '#ebeeee',
        'dark': '#000524',
        'header': '#1d191a'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        'md': '2rem',
        'lg': '3rem',
        'xl': '130px'
      }
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif']
    },
    fontSize: {
      sm: ['15px', '30px'],
      md: ['18px', '30px'],
      lg: ['25px', '30px']
    }
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['mdi', 'fa-brands'])
    })
  ]
}
