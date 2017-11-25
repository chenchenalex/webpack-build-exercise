const commonPaths = require('./common-path');

const config = {
  entry: "./src/index",
  output: {
    filename: "bundle.js",
    path: commonPaths.outputPath
  }
};

module.exports = config;
