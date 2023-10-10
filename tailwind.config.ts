import { Config } from 'tailwindcss'
import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

export default <Config>{
  content: ['./src/**/*.vue'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      colors: {
        'accent': '#0F9095',
        'accent-light': '#71d5d9',
        'grey': '#ebeeee',
        'dark': '#000524',
        'javascript': '#f7df1e',
        'vue': '#42b883',
        'react': '#61DBFB',
        'jquery': '#0769AD',
        'html': '#e34c26',
        'node': '#68A063'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '25px',
        'md': '2rem',
        'lg': '3rem',
        'xl': '130px'
      }
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
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
      collections: getIconCollections(['mdi'])
    })
  ]
}
