const commonConfig = require('./build-utils/webpack.common');
const webpackMerge = require('webpack-merge');

// module can be defined as a variable and take in one envrinoment variable from package.json
module.exports = (env) => {
  if (typeof env === 'undefined') throw new Error('Environment flag is not provided!');

  const envConfig = require(`./build-utils/webpack.${env.env}.js`);

  return webpackMerge(commonConfig, envConfig);
};
