# Creating this App

- ` mkdir OurGithubProfileApp `
- ` cd OurGithubProfileApp `
- ` npm init `
- ` npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react html-webpack-plugin webpack webpack-dev-server `
- ` mkdir app app/components app/config app/utils `
- ` touch app/main.js app/template.html `
- ` touch .babelrc .gitignore webpack.config.js `

*Customize .gitignore*

```
node_modules
node_modules/*
```

*Copy the Webpack boilerplate into webpack.config.js*

```js
module.exports = () => {
  return {
    entry: [],
    output: {},
    devtool: 'source-map',
    module: {
      rules: []
    },
    plugins: []
  }
};
```

*Customize .babelrc*

```
{
  "presets": [
    "es2015", "react"
  ]
}
```

*Add React and ES2015 specific stuff into it*

```js
module.exports = () => {
  return {
    entry: ["./app/main.js"],
    output: {
      path: __dirname + "/dist",
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
    plugins: []
  };
};
```

Test that it works by writing something ES2015-ish into main.js, then running webpack. Go into bundle.js and make sure that it looks like the ES5 equivalent!
