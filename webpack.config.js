const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader" 
        })
      },
      {
        test: /.woff|.woff2|.svg|.eot|.ttf/,
        use: 'url-loader?prefix=font/&limit=10000'
      }
    ],  
  },
  devServer: {
    hot: true,
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'index.html'
    }),
    new ExtractTextPlugin('index.css')
  ]

}