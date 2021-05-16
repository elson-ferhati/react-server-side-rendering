const path = require('path');

const { merge } = require('webpack-merge');
const sharedConfig = require('./webpack.config.shared');

const config = {
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.join(__dirname, './build/server'),
    filename: 'bundle.js',
  },
};

module.exports = merge(sharedConfig, config); // [F]
