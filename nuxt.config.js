export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: "jp",
      prefix: "og: http://ogp.me/ns#",
    },
    titleTemplate: "%s - " + "C3 OpenCampus2021",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "九州工業大学情報工学部のサークルであるC3（CompositeComputerClub）の2021年度オープンキャンパスサイトです。C3部員が制作したゲームやCG、イラスト、アプリケーション、音楽、動画などのコンテンツを楽しむことが出来ます。このサイトも部員が制作した作品の一つです。是非楽しんでください！",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "オープンキャンパス,Open Campus,open campus,九工大,九州工業大学,KIT,情報工学部,九工大情報工学部,九州工業大学情報工学部,C3,c3,CompositeComputerClub,サークル,部活,課外活動,club,ゲーム,Game,game,CG,3DCG,プログラミング,programming,IT,Web,ウェブ,動画制作,音楽,イラスト,ハッカソン,大学,福岡県",
      },
      {
        hid: "og-site-name",
        property: "og:site_name",
        content: "C3 OpenCampus2021",
      },
      { hid: "og-type", property: "og:type", content: "" },
      {
        hid: "og-url",
        property: "og:url",
        content: "https://oc2021.compositecomputer.club/",
      },
      { hid: "og-title", property: "og:title", content: "C3 OpenCampus2021" },
      {
        hid: "og-description",
        property: "og:description",
        content:
          "九州工業大学情報工学部のサークルであるC3（CompositeComputerClub）の2021年度オープンキャンパスサイトです。C3部員が制作したゲームやCG、イラスト、アプリケーション、音楽、動画などのコンテンツを楽しむことが出来ます。このサイトも部員が制作した作品の一つです。是非楽しんでください！",
      },
      {
        hid: "og-image",
        property: "og:image",
        content: "https://oc2021.compositecomputer.club/oc2021-pc.jpg",
      },
      { hid: "fb:app_id", property: "fb:app_id", content: "App-ID" },
      { hid: "tw-card", name: "twitter:card", content: "summary_large_image" },
      { hid: "tw-site", name: "twitter:site", content: "@Twitter" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "favicon.ico" }],
    script: [
      {
        src: "/ghpagespathsolver.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "@fortawesome/fontawesome-svg-core/styles.css",
    "vue-select/dist/vue-select.css",
    "~/variables.css",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/fontawesome.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/google-analytics"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    [
      "@nuxtjs/google-gtag",
      {
        id: "G-HT71B54RCT",
        debug: true,
      },
    ],
  ],

  axios: {
    baseURL: "https://shared-vps.compositecomputer.club/api/v1/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  storybook: {
    addons: [
      "@storybook/addon-actions/register",
      "@storybook/addon-backgrounds/register",
      "@storybook/addon-controls/register",
      "@storybook/addon-docs/register",
      "@storybook/addon-toolbars/register",
      "@storybook/addon-viewport/register",
    ],
  },

  googleAnalytics: {
    id: "G-HT71B54RCT",
  },
  target: "static",
  ssr: false,
};
