// This file is the base configuration for the [webpack module bundler](https://webpack.github.io/).
// Use this file to edit settings that are the same for all environments (dev, test, prod).
const imageMinJpg = require('imagemin-mozjpeg')
const imageMinPng = require('imagemin-optipng')
const imageMinSvg = require('imagemin-svgo')

var path = require('path')
var webpack = require('webpack')

var port = 80
var srcPath = path.join(__dirname, '/../src')

module.exports = {
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    noInfo: false,
    port: port,
    publicPath: '/',
  },
  entry: ['whatwg-fetch', './src/entry'],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|eot|ttf|woff2?)(\?[a-z0-9=&.]+)?$/,
        use: {
          loader: 'url-loader',
          query: {limit: 8192},
        },
      },
      {
        test: /\.(png|jpg)(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            query: {limit: 8192},
          },
          {
            loader: 'img-loader',
            options: {
              enabled: process.env.REACT_WEBPACK_ENV === 'dist',
              plugins: [
                imageMinPng({}),
                imageMinJpg({}),
              ],
            },
          },
        ],
      },
      {
        test: /\.svg(\?[a-z0-9=&.]+)?$/,
        use: [
          {
            loader: 'url-loader',
            query: {limit: 8192},
          },
          'svg-transform-loader',
          {
            loader: 'img-loader',
            options: {
              enabled: process.env.REACT_WEBPACK_ENV === 'dist',
              plugins: [
                imageMinSvg({
                  removeComments: true,
                  removeDesc: true,
                  removeTitle: true,
                }),
              ],
            },
          },
        ],
      },
      {
        test: /\.txt$/,
        use: 'raw-loader',
      },
    ],
  },
  plugins: [
    // fetch polyfill
    new webpack.ProvidePlugin({
      fetch: 'exports-loader?self.fetch!whatwg-fetch/dist/fetch.umd',
    }),
  ],
  resolve: {
    alias: {
      components: srcPath + '/components/',
      config: srcPath + '/config/' + process.env.REACT_WEBPACK_ENV,
      images: srcPath + '/images/',
      store: srcPath + '/store/',
      styles: srcPath + '/styles/',
    },
    extensions: ['.js', '.jsx', '_pb.js', '.ts', '.tsx', '_pb.d.ts'],
  },
}
