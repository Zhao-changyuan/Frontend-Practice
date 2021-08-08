
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'development',

  // 入口文件
  entry: './src/index.ts',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',

    // 告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false,
    }
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      "chrome": '58',
                      "ie": "11"
                    },

                    // 指定 corejs 的版本
                    "corejs": "3",

                    // 使用corejs的方式，"usage"表示按需加载
                    useBuiltIns: "usage"
                  }
                ]
              ]
            }
          },
          "ts-loader"
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    })
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}

module.exports = config