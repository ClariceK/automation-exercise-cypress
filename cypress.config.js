const { defineConfig } = require("cypress");
const { findDownloadedFile } = require('./cypress/plugins/file-tasks');
let usuarioCompartilhado = {}

module.exports = defineConfig({

  env: require('./cypress/cypress.env.json'),
  
  video: true,
  videosFolder: "cypress/videos",
  videoCompression: 32,
  trashAssetsBeforeRuns: true,
 

  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "https://www.automationexercise.com",
    chromeWebSecurity: false,
    downloadsFolder: "cypress/downloads",
    
    setupNodeEvents(on, config) {
      const cucumber = require('cypress-cucumber-preprocessor').default;
      on('file:preprocessor', cucumber());
      
      on('task', {
        findDownloadedFile,

        
        salvarEmail(email) {
          usuarioCompartilhado.email = email;
          return null;
        },

        obterEmail() {
          return usuarioCompartilhado.email || null;
        }


      });
      return config;
    },
  },
});