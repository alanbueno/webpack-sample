const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackCommons = require('./config.common')

module.exports = merge(webpackCommons, {
  mode: 'production',

  devtool: 'source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Sample',
      template: 'src/index.html',
    }),
  ],
})
