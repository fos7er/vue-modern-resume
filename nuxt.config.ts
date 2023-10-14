// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL
    }
  },
  devtools: {enabled: true},
  app: {
    buildAssetsDir: '/_nuxt/',
    head: {
      link: [
        {rel: 'icon', type: 'image/png', href: '/favicon.png'},
        {rel: 'preconnect', href: 'https://fonts.googleapis.com'},
        {rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous'},
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap'
        }
      ],
      meta: [
        {name: 'robots', content: 'index, follow'},
        {name: 'theme-color', media: '(prefers-color-scheme: light)', content: 'white'},
        {name: 'theme-color', media: '(prefers-color-scheme: dark)', content: 'black'}
      ]
    }
  },
  devServer: {
    port: 8002
  },
  // https://nuxt.com/docs/getting-started/deployment
  ssr: true,
  srcDir: 'src',
  css: [
    '@/assets/css/main.scss'
  ],
  modules: [
    //'@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-simple-sitemap'
  ],
  colorMode: {
    classSuffix: ''
  },
  i18n: {
    vueI18n: './i18n.config.js',
    strategy: 'prefix_except_default',
    baseUrl: 'http://localhost:3000/' || process.env.BASE_URL,
    locales: [
      {
        code: 'en',
        iso: 'en-US'
      },
      {
        code: 'ru',
        iso: 'ru-RU'
      }
    ],
    defaultLocale: 'en',
    detectBrowserLanguage: false
  },
  site: {
    url: process.env.BASE_URL
  },
  nitro: {
    // https://nitro.unjs.io/config#compresspublicassets
    compressPublicAssets: true
  }
})
