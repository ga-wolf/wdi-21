# Setting this up Node Project

- Creating a new Node project - ` npm init `
  - ` package.json ` - This is our Gemfile + details about our app
- Installing our development dependencies
  - ` npm install --save-dev PACKAGE_NAME `
  - Creates a ` node_modules ` directory
  - Adds all of the code necessary for the given package
  - Adds the package is a ` devDependencies ` in our ` package.json `
  - Creates ` package-lock.json ` - outlines all of the dependencies and the load order (like our Gemfile.lock)
  - ` npm install --save-dev babel-core babel-loader babel-preset-es2015 `
- Create your files
  - ` .gitignore ` - Make sure Git doesn't care about node_modules!
  - Plus your own file to write JS in
- Get into Webpack...
  - Create a file called ` webpack.config.js `
  - Where are our files stored? This is the entry array.
  - Where do we want the compiled files to go? This is the output.
  - What compilation processes do I have? This is module.rules
  - Do I want source-mapping? (e.g. devtool: 'source-map')
  - Plus, extra stuff (e.g. plugins)

```js
module.exports = () => {
  return {
    entry: [],
    devtool: 'source-map',
    output: {
      filename: 'SOME_FILE_NAME'
    },
    module: {
      rules: [
        {
          test: /\.extension$/,
          exclude: /node_modules/,
          use: []
        }
      ]
    },
    plugins: []
  };
};
```

- Get into Babel
  - ` npm install --save-dev babel-core babel-loader babel-preset-es2015 `
  - ` touch .babelrc ` - This is where you configure how Babel runs (e.g. setting presets)

```json
{
  presets: [
    "es2015"
  ]
}
```

  - Make Babel work in a Webpack context

  ```js
  module.exports = () => {
    return {
      // ...
      module: {
        rules: [
          {
            test: /\.es6$/,
            exclude: /node_modules/,
            use: [ "babel-loader" ]
              // This will reference our .babelrc file automatically
          }
        ]
      },
      // ...
    };
  };
  ```

- Run Webpack
  - ` webpack `
  - ` webpack -p ` - Run Webpack in production (minify)
