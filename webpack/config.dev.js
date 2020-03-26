const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackCommons = require('./config.common')

module.exports = merge(webpackCommons, {
  mode: 'development',

  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    port: 3000,
    clientLogLevel: 'warning',
    open: true,
    historyApiFallback: true,
    stats: 'errors-only',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: '[DEV] Webpack Sample',
      template: 'src/index.html',
    }),
  ],
})
