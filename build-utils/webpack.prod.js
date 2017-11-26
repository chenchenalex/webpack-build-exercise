const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css/,
        use: ExtractTextWebpackPlugin.extract({
          use: 'css-loader', // load css as bundle in prod
          fallback: 'style-loader' // dynamic loaded css will inject into header
        })
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('style.css')
  ]
};
