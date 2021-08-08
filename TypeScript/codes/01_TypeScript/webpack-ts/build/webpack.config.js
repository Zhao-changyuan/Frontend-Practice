
const path = require('path')
const HTMLWebpackPlugin  = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'

function resolve(dir) {
  return path.resolve(__dirname, '..', dir)
}

/** @type {import('webpack').Configuration} */
const config = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: './src/main.ts'
  },

  output: {
    path: resolve('dist'),
    filename: '[name].[contenthash:8].js'
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [resolve('src')]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HTMLWebpackPlugin({
      template: './public/index.html'
    })
  ],

  // 识别模块，不用写扩展名
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },

  devtool: isProd ? 'cheap-module-source-map' : 'eval-cheap-module-source-map',

  devServer: {
    host: 'localhost',
    stats: 'errors-only', // 打包日志输出错误信息
    port: 9527,
    open: true
  }
}

module.exports = config