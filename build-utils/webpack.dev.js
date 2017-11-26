module.exports = {
  devtool: 'eval-source-map',
  plugins: [
    {
      test: /\.css/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }
  ]
};
