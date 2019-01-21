const { injectBabelPlugin } = require('react-app-rewired');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, '.', dir);
}
module.exports = function override(config, env) {
  config = injectBabelPlugin(['styled-jsx/babel'], config);
  config.resolve.alias = {
    '@': resolve('src')
  };
  return config;
};