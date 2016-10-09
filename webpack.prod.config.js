var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./main.js",
  },
  output: {
    path: 'public/js', // webpackで使用する
    publicPath:"public/js", // webpack-dev-severで使用する
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['latest', 'react', 'stage-0' ]
        }
      }
    ]
  },
  plugins: [
    // これ付けないと、ReactのminifyでDisable warningがでるため
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin("bower.json", ["main"])
    ),
    new webpack.optimize.UglifyJsPlugin()  // minify
  ],
  resolve: {
  //   //all these extensions will be resolved without specifying extension in the `require` function
  //   extensions: ['', '.js'],
  //   //files in these directory can be required without a relative path
  //   modulesDirectories: [
  //     'node_modules',
  //     'bower_components'
  //   ]
  }
}
