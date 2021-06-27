/**
  webpack 的配置文件
*/
const { resolve } = require('path')

module.exports = {
  // 打包模式
  mode: 'production',
  
  // 入口文件
  entry: './src/index.js',

  // 出口配置
  output: {
    // 输出目录，输出目录必须是绝对路径
    path: resolve(__dirname, 'output'),
    // 输入文件名称
    filename: 'bundle.js'
  },

  // 模块配置
  module: {
    // 指定多个配置规则
    rules: [

    ]
  },

  // 插件配置
  plugins: [

  ],

  // 开发服务器
  devServer: {
    
  }
}