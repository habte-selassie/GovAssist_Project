const { override, addWebpackDevServer } = require('customize-cra');

module.exports = override(
  addWebpackDevServer(config => {
    config.stats = 'minimal'; // Suppress compilation messages
    return config;
  })
);
