export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'car-catalog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/api.ts",
    "~/plugins/services.ts",
    "~/plugins/axios-accessor.ts",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
   '@nuxtjs/axios'
  ],
  axios: {
    baseURL: "/",
    proxy: true,
    prefix: "/api/",
  },
  proxy: {
    //"/api/": { target: "https://carapi.app" },
    "/api/": { target: "https://car-api2.p.rapidapi.com"}
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
