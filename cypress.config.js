module.exports = {
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br/',

    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    }
  }
}
