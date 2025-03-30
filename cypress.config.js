const { defineConfig } = require('cypress');
const webpack = require('@cypress/webpack-preprocessor');
const addCucumberPreprocessorPlugin =
  require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.advantageonlineshopping.com',
    specPattern: [
      'cypress/e2e/web/**/*.feature',
      'cypress/e2e/api/**/*.feature',
    ],
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: {
          resolve: {
            extensions: ['.ts', '.js', '.jsx', '.tsx'],
          },
          module: {
            rules: [
              {
                test: /\.feature$/,
                use: [
                  {
                    loader: '@badeball/cypress-cucumber-preprocessor/webpack',
                    options: config,
                  },
                ],
              },
            ],
          },
        },
      };

      on('file:preprocessor', webpack(options));
      addCucumberPreprocessorPlugin(on, config);
      config.stepDefinitions = 'cypress/support/step_definitions/**/*.js';

      return config;
    },
  },
});
