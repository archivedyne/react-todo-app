var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./main.js",
    // html: "./index.html",
  },
  output: {
    path: path.join(__dirname, 'bluild'),
    publicPath:"public", // メモリ上にbuildするため、仮装buildルート
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react' ]
        }
      }
    ]
  },
  devServer: {
    contentBase: "./", // devserverが読み込むドキュメントルートフォルダ
    // inline: true,
    port: 8080
  }
}

