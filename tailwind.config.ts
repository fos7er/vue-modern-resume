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
      '2xl': '1536px'
    },
    extend: {
      colors: {
        'accent': 'rgb(248, 120, 39)',
        'accent-hover': 'rgb(223, 111, 41)',
        'accent-active': 'rgb(221, 106, 0)',
        'accent-light': 'rgba(253, 106, 35, 0.09)',
        'accent-light-hover': 'rgb(255, 218, 201)',
        'grey-regular': 'rgb(184, 184, 184)',
        'grey-light': 'rgb(230, 230, 230)',
        'grey-text': '#5f5f5f'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '25px',
        'md': '2rem',
        'lg': '3rem',
        'xl': '60px',
        '2xl': '188px'
      }
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    fontSize: {
      xs: ['10px', '12px'],
      sm: ['14px', '20px'],
      base: ['22px', '26px'],
      md: ['28px', '32px'],
      lg: ['42px', '50px'],
      xl: ['66px', '72px']
    }
  },
  plugins: [
    iconsPlugin({
      // Select the icon collections you want to use
      collections: getIconCollections(['mdi'])
    })
  ]
}
