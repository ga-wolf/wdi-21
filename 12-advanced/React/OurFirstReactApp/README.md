# Setting up this React Application

- ` mkdir OurFirstReactApp `
- ` cd OurFirstReactApp `

**Creating a new Node Application**

- ` npm init `
  - Hit enter a bunch of times
  - This creates a package.json file
    - package.json outlines your application dependencies (like your Gemfile), plus provides details of your app (who created it etc.)

**Installing your development dependencies**

- ` npm install --save-dev webpack babel-core babel-loader babel-preset-es2015 babel-preset-react `
  - This downloads packages from NPM (like gem install), plus adds them as development dependencies in your app
  - It also creates a node_modules directory (where your packages are stored), plus a package-lock.json file (where details of the current versions of libraries are stored)
