// https://nuxt.com/docs/api/configuration/nuxt-config
import pkg from './package.json'

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL
    }
  },
  devtools: { enabled: true },
  app: {
    buildAssetsDir: '/_nuxt/',
    head: {
      htmlAttrs: {
        lang: 'ru'
      },
      title: pkg.name,
      link: [
        { rel: 'icon', type: 'image/png', href: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==' }
      ],
      meta: [
        { key: 'description', name: 'description', content: pkg.description },
        { name: 'robots', content: 'index, follow' },
        { name: 'theme-color', media:'(prefers-color-scheme: light)', content: 'white' },
        { name: 'theme-color', media:'(prefers-color-scheme: dark)', content: 'black' }
      ]
    }
  },
  devServer: {
    port: 8001
  },
  // https://nuxt.com/docs/getting-started/deployment
  ssr: true,
  srcDir: 'src',
  css: [
    '@/assets/css/main.scss'
  ],
  modules: [
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-simple-sitemap'
  ],
  i18n: {
    vueI18n:'./i18n.config.js',
    strategy: 'prefix_except_default',
    locales: ['en', 'ru'],
    defaultLocale: 'en',
    detectBrowserLanguage: false
  },
  site: {
    url: process.env.BASE_URL
  },
  nitro: {
    // https://nitro.unjs.io/config#compresspublicassets
    compressPublicAssets: true
  },
  colorMode: {
    classSuffix: ''
  }
})
