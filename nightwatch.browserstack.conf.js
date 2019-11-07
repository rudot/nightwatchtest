const baseConfig = require('./nightwatch.conf.js');

const config = {
  ...baseConfig,
  webdriver: {
    'start_process': false,
    'host': 'hub-cloud.browserstack.com',
    'port': 80
  }
};