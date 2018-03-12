'use strict'

const path = require('path')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    sass: './src/main.js',
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'static/js/[name].[hash].js',
    chunkFilename: 'static/js/[name].[hash].js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: 'vue-style-loader!css-loader',
          scss: 'vue-style-loader!css-loader!sass-loader?precision=8&indentedSyntax'
        },
        postLoader: {
          html: 'babel-loader'
        }
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.(scss|css)$/,
      use: ExtractTextPlugin.extract({
        use: 'css-loader!sass-loader?precision=8!postcss-loader'
      })
    }, {
      test: /\.((woff2?svg)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?|svg|eot|ttf)$/,
      loader: 'url-loader',
      options: {
        limit: 10240,
        name: 'static/fonts/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(jpe?g|png|gif|ico)$/,
      loader: 'url-loader',
      options: {
        limit: 10240,
        name: 'static/img/[name].[hash:8].[ext]'
      }
    }]
  },
  resolve: {
    extensions: ['.js', 'vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': resolve('src'),
      'api': resolve('api'),
      'view': resolve('src/view'),
      'router': resolve('src/router.js'),
      'components': resolve('src/components')
    }
  },
  plugins: [
    new CopyWebpackPlugin([{
      from: resolve('lib'),
      to: resolve('dist/static/lib'),
      toType: 'dir'
    }])
  ]
}
