const baseConfig = require('./nightwatch.conf.js');

const config = {
  ...baseConfig,
  custom_commands_path: [
    'node_modules/nightwatch-vrt/commands'
  ]
};

module.exports = config;