var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./main.js",
    // html: "./index.html",
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
  devServer: {
    contentBase: "./", // devserverが読み込むドキュメントルートフォルダ
    inline: true,
    port: 8080,
    compress: true,
    clientLogLevel: "info",
    stats: { colors: true }
  },
  plugins: [
    // これ付けないと、ReactのminifyでDisable warningがでるため
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
  ]
}
