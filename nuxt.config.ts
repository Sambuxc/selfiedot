export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true }
  },

  modules: [
    '@nuxthq/studio',
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@tailwindcss/typography',
    '@nuxt/icon', // https://icones.js.org/
  ],

  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: '', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage', // or 'sessionStorage' or 'cookie'
    storageKey: 'nuxt-color-mode'
  },

  components: {
    dirs: [
      {
        path: '~/components/atoms',
        prefix: 'Atoms'
      },
      {
        path: '~/components/molecules',
        prefix: 'Molecules'
      },
      {
        path: '~/components/organisms',
        prefix: 'Organisms'
      }
    ]
  },

  compatibilityDate: '2024-11-14',
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})