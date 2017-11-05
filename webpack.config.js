/* eslint-disable */

var path = require('path');

var webpack = require('webpack');

var root = path.join(process.cwd(), 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],

  output: {
    path: path.join(process.cwd(), 'dist'),
    publicPath: '/asserts/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  resolve: {
    modules: ['node_modules', root]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
