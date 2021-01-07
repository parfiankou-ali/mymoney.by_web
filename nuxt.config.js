export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'mymoney.by',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  router: {
    middleware: [],
    linkActiveClass: 'is-active',
    linkExactActiveClass: 'is-exact'
  },

  axios: {
    progress: false
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: process.env.API_BROWSER_URL + '/' + process.env.API_VERSION + '/'
    }
  },

  privateRuntimeConfig: {
    axios: {
      baseURL: process.env.API_SERVER_URL + '/' + process.env.API_VERSION + '/'
    }
  },

  i18n: {
    locales: [{ code: 'ru', iso: 'ru-RU', file: 'ru-RU/index.js' }],
    langDir: 'assets/locales/',
    defaultLocale: 'ru',
    lazy: true
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'assets/styles/_app.styl'
  ],

  styleResources: {
    stylus: [
      'assets/styles/_resources.styl'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/axios',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/style-resources'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-i18n'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
