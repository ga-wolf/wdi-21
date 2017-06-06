module.exports = () => {

  return {
    entry: [
      './app.es6'
    ],
    devtool: 'source-map',
    output: {
      filename: 'compiled.js'
    },
    module: {
      rules: [
        {
          test: /\.es6$/,
          exclude: /node_modules/,
          use: [ 'babel-loader' ]
        }
      ]
    },
    plugins: []
  };

};
