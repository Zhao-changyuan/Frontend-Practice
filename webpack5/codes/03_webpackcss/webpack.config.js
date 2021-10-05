/**
  webpack 的配置文件
*/
const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StylelintPlugin = require('stylelint-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  // 打包模式
  mode: 'development',
  
  // 入口文件
  entry: './src/index.js',

  // 出口配置
  output: {
    // 输出目录，输出目录必须是绝对路径
    path: resolve(__dirname, 'dist'),
    // 输入文件名称
    filename: 'bundle.js'
  },

  // 模块配置
  module: {
    // 指定多个配置规则
    rules: [
      {
        test: /\.css$/i,
        // use中loader的加载顺序是：从右到左，从下到上
        use: [
          // 3. 将js中的样式，挂载到<style>标签中
          // 'style-loader',

          // 3. 将CSS打包到独立文件中
          MiniCssExtractPlugin.loader,

          // 2. css-loader按照CommonJS规范，将样式文件，输出到JS中
          'css-loader',

          // 1. 通过postcss-loader 给样式属性添加浏览器前缀
          'postcss-loader',
        ]
      },

      {
        test: /\.less$/i,
        // 3. use中loader的加载顺序是：从右到左，从下到上
        use: [
          // 4. 将js中的样式，挂载到<style>标签中
          // 'style-loader',

           // 4. 将CSS打包到独立文件中
           MiniCssExtractPlugin.loader,

          // 3. css-loader按照CommonJS规范，将样式文件，输出到JS中
          'css-loader',

          // 2. 通过postcss-loader 给样式属性添加浏览器前缀
          'postcss-loader',

          // 1. 将less转成普通的 CSS
          'less-loader',
        ]
      }
    ]
  },

  // 插件配置
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new StylelintPlugin({
      files: 'src/css/*.{css,less,sass,scss}'
    }),
    // 压缩CSS
    new OptimizeCssAssetsPlugin(),
  ],

  // 开发服务器
  devServer: {
    
  }
}