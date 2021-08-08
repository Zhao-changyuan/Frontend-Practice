
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// webpack配置信息
/** @type {import('webpack').Configuration} */
const config = {
  mode: 'development',

  // 入口文件
  entry: './src/index.ts',
  
  // 指定打包文件所在目录
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",

    // 告诉webpack不使用箭头函数
    environment: {
      arrowFunction: false,
      const: false,
    }
  },

  // 指定 webpack打包时要使用模块
  module: {
    // 指定加载的规则
    rules: [
      {
        test: /\.ts$/,
        // 要使用的loader
        use: [
          // 配置babel
          {
            loader: 'babel-loader',
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      "chrome": "58",
                      "ie": "11"
                    },

                    // 指定 corejs 的版本
                    "corejs": "3",

                    // 使用corejs的方式，"usage"表示按需加载
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader',
        ],
        exclude: /node_modules/
      },

      // 设置less文件的处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          // 引入postcss
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },

  // 配置webpack插件
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: './src/index.html'
    }),
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}

module.exports = config