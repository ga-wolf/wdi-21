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

*Add scripts to your HTML page dynamically*

```js
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
```

*Add scripts to package.json to make your life easier*

```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "compile": "webpack",
  "compile:production": "webpack -p",
  "start": "webpack-dev-server"
}
```

Remember that each one of these scripts can be run from the terminal by writing ` npm run ` + whatever thing you want to run (e.g. ` npm run compile `).

## A few things about components

I make them pass the _F.I.R.S.T_ test!

- *F*ocussed
- *I*ndependent
- *R*eusable
- *S*mall
- *T*estable

Other rules:
- One component per file
- Import what is necessary
- Export what you want other files to have access to
- You must have a render method
  - It must return some markup
- It must only return a single element! That element can contain other elements though.
- If you need to add a class to an element, use className in JSX (because class means something to JS).
  - e.g. ` <div className="something"></div> `

*The Basic Boilerplate for a Component file*

```js
import React from "react";

class SomeComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>SomeComponent</h1>
      </div>
    );
  }
}

export default SomeComponent;
```
