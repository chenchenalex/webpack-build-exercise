const path = require("path");
const Webpack = require("webpack");

// module can be defined as a variable and take in one envrinoment variable from package.json
module.exports = (env) => {
  console.log(env); // { foo: 1, bar: 2 }
  
  return {
    entry: "./src/index",
    output: {
      filename: "bundle.js",
      path: path.join(__dirname, "dist")
    },
    module: {
      rules: [
        {
          test: /\.jpe?g$/,
          use: ['file-loader']
        }
      ],
    },
  };
};
