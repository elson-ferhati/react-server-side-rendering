const path = require('path');

module.exports = {
  mode: 'development',
  resolve: {
    alias: {
      '@Components': path.resolve(__dirname, './src/client/components/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, './node_modules/'),
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
