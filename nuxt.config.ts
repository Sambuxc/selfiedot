export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true }
  },

  modules: [
    '@nuxthq/studio',
    '@nuxt/content',
    '@nuxt/icon',
  ],

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
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
