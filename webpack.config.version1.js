const path = require('path');
const Webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },

  module: {
    rules: [
      {
        test: /\.jpe?g$/,
        use: ['file-loader']
      }
    ],
  },

  plugins: [
    new Webpack.optimize.UglifyJsPlugin()
  ]
};
