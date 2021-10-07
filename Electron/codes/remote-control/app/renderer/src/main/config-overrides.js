

const { override } = require('customize-cra')

function addRenderTarget(config) {
  config.target = 'electron-renderer'
  return config;
}

module.exports = override(addRenderTarget)