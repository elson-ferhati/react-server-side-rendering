const { merge } = require('webpack-merge');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const sharedConfig = require('./webpack.config.shared');

const config = {
  target: 'web',
  entry: {
    main: path.resolve(__dirname, './src/client/index.js'),
  },
  output: {
    path: path.join(__dirname, './build/client'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: 9500,
    // contentBase: path.resolve(__dirname, './client/index.js'),
    compress: true, // Enable gzip compression for everything served
    hot: true, // Enable webpack's Hot Module Replacement feature
    open: true, // Tells dev-server to open the browser after server had been started. Set it to true to open your default browser.
    historyApiFallback: true, // Will redirect 404s to /index.html
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Test',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html', // output file
    }),
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = merge(sharedConfig, config);
