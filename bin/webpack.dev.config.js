'use strict'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const webpackBaseCofnig = require('./webpack.base.config.js')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(webpackBaseCofnig, {
  plugins: [
    new ExtractTextPlugin('static/css/[name].[hash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      filename: 'vendor.bundle.js'
    }),
    new HtmlWebpackPlugin({
      inject: true,
      filename: path.join(__dirname, '../dist/index.html'),
      template: path.join(__dirname, '../index.html')
    }),
    new FriendlyErrorsPlugin()
  ]
})
