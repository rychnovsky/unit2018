/* eslint-env node */
/* eslint-disable no-inline-comments */

const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = options => ({
  entry: {
    js: ['babel-polyfill', './src/index.js'],
  },
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, '../../prod'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg|gif|svg)/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.scss/,
        enforce: 'pre',
        loader: 'import-glob-loader',
      },
      {
        test: /\.s?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
          disable: process.env.NODE_ENV === 'development',
        }),
      },
    ],
  },
  plugins: options.plugins.concat([
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('style.[hash].css'),
  ]),
  resolve: {
    modules: ['src', 'node_modules'],
  },
  devtool: options.devtool,
  target: 'web', // Make web variables accessible to webpack, e.g. window
  performance: options.performance || {},
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
  },
})
