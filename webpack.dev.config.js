var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    javascript: "./main.js",
    html: "./index.html",
  },
  output: {
    path: path.join(__dirname, 'dist'), //'public/js', // webpackで使用する
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
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: "style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]"
      }
    ]
  },
  devServer: {
    // contentBase: "./", // devserverが読み込むドキュメントルートフォルダ
    // publicPath: "public/js",
    inline: true,
    port: 8080,
    compress: true,
    clientLogLevel: "info",
    stats: { colors: true },
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    }),
  ]
}
