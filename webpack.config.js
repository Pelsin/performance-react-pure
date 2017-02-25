const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/js/app.js',
  output: {
    path: path.resolve(__dirname, 'app/build'),
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: 'babel-loader'
      }]
  },
  stats: {
    color: true
  },
  devtool: 'source-map'
};