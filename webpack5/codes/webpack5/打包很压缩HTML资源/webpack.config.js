const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 模块语法：CommonJS
// webpack默认的配置文件，名称“webpack.config.js”
module.exports = {
  // 1. entry 入口

  // 1.1 单入口
  // entry: './src/index.js',

  // 1.2 多入口
  // 数组写法， 多入口，写多个入口文件所有入口文件形成一个chunk，名称是默认的，输出也是只有一个bundle
  // entry: ["./src/index.js", "./src/main.js"],

  // 1.3 Object格式写法(多入口),有几个入口文件就会生成几个chunk，并输出几个bundle，chunk的名称是key
  // entry: {
  //   one: './src/index.js',
  //   two: './src/main.js',
  // },

  // 1.4 混合写法
  // entry: {
  //   onea: ['./src/main.js', './src/index.js'],
  //   twob: './src/index.js'
  // },

  entry: {
    vendor: ['./src/js/jquery.js', './src/js/common.js'],
    index: './src/js/index.js',
    car: './src/js/car.js',
  },

  // 2. 输出
  output: {
    filename: '[name].js',
    // 输出路径一般采用绝对路径
    path: resolve(__dirname, 'build'),
  },

  // 3. loader
  module: {
    rules: [

    ],
  },

  // 4. plugins，用于执行范围更广的任务
  plugins: [
    // 默认会创建一个空的，目的是自动引入打包的资源（js/css）
    // new HtmlWebpackPlugin()

    // 有几个页面就要调用几次，添加参数
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   filename: 'demo.html',
    //   // html元素压缩选项
    //   minify: {
    //     // 删除空格
    //     collapseWhitespace: true,
    //     // 移除注释
    //     removeComments: true,
    //   }
    // })

    // 有几个页面就要调用几次
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index', 'vendor'],
      // html元素压缩选项
      minify: {
        // 删除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/car.html',
      filename: 'car.html',
      chunks: ['car', 'vendor'],
      // html元素压缩选项
      minify: {
        // 删除空格
        collapseWhitespace: true,
        // 移除注释
        removeComments: true,
      },
    }),
  ],

  // 5. mode 模式配置
  mode: 'development',
};
