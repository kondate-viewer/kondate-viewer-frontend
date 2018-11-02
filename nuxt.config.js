module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    script: [
      { src: '/js/webfontloader.js' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Modules configuration
  */
  modules: [
    'bootstrap-vue/nuxt',
    ['@nuxtjs/google-analytics', { id: 'UA-121332001-1' }],
    ['@nuxtjs/moment', ['ja']],
    '@nuxtjs/pwa'
  ],
  workbox: {
    dev: true
  },
  manifest: {
    name: '献立表 (仮)',
    short_name: '献立表',
    description: '献立を閲覧できます',
    lang: 'ja',
    theme_color: '#fc9638',
    background_color: '#fc9638',
    display: 'standalone',
    orientation: 'any',
    scope: '/',
    start_url: '/'
  },
  render: {
    http2: {
      push: true
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
