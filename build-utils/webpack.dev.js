module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jpe?g$/,
        use: ['file-loader']
      }
    ],
  },
};
