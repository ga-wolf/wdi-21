const HTMLWebpackPlugin = require("html-webpack-plugin");
const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + "/app/template.html",
  filename: "index.html"
});

module.exports = () => {
  return {
    entry: ["./app/main.js"],
    output: {
      path: __dirname + "/dist",
      // filename: "bundle.[hash].js",
      filename: "bundle.js"
    },
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },
    plugins: [HTMLWebpackPluginConfig]
  };
};
