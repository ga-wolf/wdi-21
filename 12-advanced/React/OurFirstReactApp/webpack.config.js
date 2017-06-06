const HTMLWebpackPlugin = require("html-webpack-plugin");

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/template.html",
  filename: "index.html"
});

// Where is my source code? In the app directory
// Where do I want my compiled code to go? In a directory called dist
// How is code compiled? Using Babel
// Do we need help with errors? Source map
// Anything extra (plugins etc.)

module.exports = () => {
  return {
    entry: ["./app/main.js"],
    devtool: "source-map",
    output: {
      path: __dirname + "/dist",
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.jsx?$/,
          use: ["babel-loader"]
        }
      ]
    },
    plugins: [HTMLWebpackPluginConfig]
  };
};
