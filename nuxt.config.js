const contentfulConfig = require('./.contentful.json');

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'mbl-lenzburg',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#d66d3c' },

  modules: [
    [
      'nuxt-validate',
      {
        lang: 'de'
      }
    ]
  ],
  /*
  ** Build configuration
  */
  build: {
    // vendor: ['vee-validate'],
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  },

  env: {
    CTF_SPACE_ID: contentfulConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: contentfulConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_PAGE_TYPE_ID: contentfulConfig.CTF_PAGE_TYPE_ID
  }
};
