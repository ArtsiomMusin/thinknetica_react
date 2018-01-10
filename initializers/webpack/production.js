import path from 'path';
import webpack from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const root = path.join(process.cwd(), 'src');

export default {
  devtool: 'source-map',

  entry: {
    bundle: './src/index.js'
  },

  output: {
    path: path.join(process.cwd(), 'src', 'static', 'assets'),
    publicPath: '/assets/',
    filename: '[name].[chunkhash].js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      },
      {
        test: /\.(png|woff(2)?|eot|ttf|svg)([a-z0-9=.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },

  resolve: {
    modules: ['node_modules', root]
  },

  plugins: [
    new webpack.DefinePlugin({
      __SERVER__: false,
      __CLIENT__: true,
      __DEVELOPMENT__: false,
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module && module.context.indexOf('node_modules') !== -1;
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: 'source-map'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'
    })
  ]
};
