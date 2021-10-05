// 公共配置文件
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');

const ESLintPlugin = require('eslint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 公共样式loader
const commonStyleLoader = [
  // 3. 将CSS打包到独立文件中
  // MiniCssExtractPlugin.loader,
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: '../',
    },
  },

  // 2. css-loader按照CommonJS规范，将样式文件，输出到JS中
  'css-loader',

  // 1. 通过postcss-loader 给样式属性添加浏览器前缀
  'postcss-loader',
];

module.exports = {
  // 入口文件
  entry: './src/index.js',

  // 出口配置
  output: {
    // 输出目录，输出目录必须是绝对路径
    path: resolve(__dirname, '../dist'),
    // 输入文件名称
    filename: 'bundle.js',
  },

  // 模块配置
  module: {
    // 指定多个配置规则
    rules: [
      {
        test: /\.css$/i,
        // use中loader的加载顺序是：从右到左，从下到上
        use: commonStyleLoader,
      },

      {
        test: /\.less$/i,
        // 3. use中loader的加载顺序是：从右到左，从下到上
        use: [...commonStyleLoader, 'less-loader'],
      },

      // js
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  // 按需加载
                  useBuiltIns: 'usage',
                  // core-js版本
                  corejs: 3,
                  // targets: 'defaults'
                  // 手动指定兼容浏览器的版本
                  targets: {
                    chrome: '58',
                    ie: '9',
                    firefox: '60',
                    safari: '10',
                    edge: '17',
                  },
                },
              ],
            ],
          },
        },
      },

      // file
      {
        test: /\.(png|gif|jpe?g|jfif)$/i,
        // use: {
        //   loader: 'url-loader',
        //   options: {
        //     // 指定图片大小，小于该值的图片，会被转成base64
        //     limit: 8 * 1024, // 8kb
        //     // [name] 是图片原来的名称
        //     // [ext] 是图片原来的后缀名
        //     name: 'image/[name].[ext]',
        //     // url-loader 默认采用 ES Modules 规范进行解析，但是 html-loader 引入图片使用的是CommonJS 规范
        //     // 解决：关闭url-loader 默认的 ES Modules 规范， 强制 url-loader 使用 CommonJS 规范进行打包
        //     esModule: false,
        //   },
        // },

        // 使用资源模块处理图片
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          // 后缀名[ext]本身以及包含了一个"."
          filename: 'image/[name][ext]',
        },
      },

      // html
      // {
      //   test: /.(htm|html)$/i,
      //   use: {
      //     loader: 'html-loader',
      //     options: {
      //       // webpack 4 中只需要在url-loader中设置 esModule: false
      //       // webpack 5 需要 html-loader中，也配置 esModule: false
      //       esModule: false,
      //     },
      //   },
      // },

      // 匹配字体文件
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        // use: {
        //   loader: 'file-loader',
        //   options: {
        //     name: 'fonts/[name].[ext]',
        //   },
        // },

        // 使用资源模块处理字体文件
        // asset 可以在asset/resource 和 asset/inline 之间进行选择
        // 如果文件小于 8kb, 则使用 asset/inline 类型
        // 如果文件大于 8kb, 则使用 asset/resource 类型
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8 * 1024,
          },
        },
        generator: {
          // 后缀名[ext]本身以及包含了一个"."
          filename: 'fonts/[name][ext]',
        },
      },
    ],
  },

  // 插件配置
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new StylelintPlugin({
      files: 'src/css/*.{css,less,sass,scss}',
    }),

    // new ESLintPlugin({
    //   // 自动修复常规的代码报错
    //   fix: true,
    // }),

    // 直接将src下，不需要特殊处理的文件，直接复制到输出目录下
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'src/public',
          to: 'public',
        },
      ],
    }),

    // 打包之前，先删除历史文件
    new CleanWebpackPlugin(),
  ],

  // 配置目标
  target: 'web',
};
