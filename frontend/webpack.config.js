const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: ['@babel/polyfill', './src/render.jsx'],
  devtool: 'inline-source-map',
  mode: 'development',
  output: {
    path: path.join(__dirname, './public'),
    filename: 'js/index.js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: '/',

  },
  devServer: {
    inline: true,
    hot: true,
    port: process.env.PORT || 8080,
    watchContentBase: true,
    watchOptions: {
      poll: true,
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Home',
      inject: true,
      template: './index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
module.exports = config;
