export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'C3 OpenCampus2021',
        htmlAttrs: {
            lang: 'jp'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
          {
            src: '/ghpagespathsolver.js'
          }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '@fortawesome/fontawesome-svg-core/styles.css',
        'vue-select/dist/vue-select.css',
        '~/variables.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/fontawesome.js'
    ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://shared-vps.compositecomputer.club/api/v1/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  storybook: {
    addons: [
      '@storybook/addon-actions/register',
      '@storybook/addon-backgrounds/register',
      '@storybook/addon-controls/register',
      '@storybook/addon-docs/register',
      '@storybook/addon-toolbars/register',
      '@storybook/addon-viewport/register',
        ],
    },

  googleAnalytics: {
    id: 'G-HT71B54RCT'
  },
  target: 'static',
  ssr: false
}