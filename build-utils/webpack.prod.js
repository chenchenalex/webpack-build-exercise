const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

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
    new ExtractTextWebpackPlugin('style.css'),
    new UglifyWebpackPlugin({
      sourceMap: true
    }),
    new CompressionWebpackPlugin({
      test: /\.(js|html|css)$/,
      limit: 10240,
      minRatio: 0.8
    })
  ]
};
