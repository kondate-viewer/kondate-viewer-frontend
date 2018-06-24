module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    script: [
      //{ src: 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js' },
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
    name: '奈良高専 寮食堂 献立',
    short_name: '寮食堂献立',
    description: '奈良高専 寮食堂の献立を閲覧できます',
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
