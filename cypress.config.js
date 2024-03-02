const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    baseUrl: 'https://juice-shop-sanitarskyi.herokuapp.com',
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
