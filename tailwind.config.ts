import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],

  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        primary: colors.emerald,

        gray: {
          900: '#121212'
        },
        
        blue: {
          400: '#1DA1F2',
          300: '#1A91DA'
        },
      }
    }
  },

  plugins: [
    require('@tailwindcss/typography')
  ],
} satisfies Config 