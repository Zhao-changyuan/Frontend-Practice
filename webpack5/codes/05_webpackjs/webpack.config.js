/**
  webpack 的配置文件
*/
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

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
    filename: 'bundle.js',
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
        ],
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
        ],
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
    // 压缩CSS
    new OptimizeCssAssetsPlugin(),

    // HMTL的配置
    new HtmlWebpackPlugin({
      // 指定打包后的文件名称
      filename: 'index.html',

      // 用来指定生成 HTML 的模板
      template: './src/index.html',

      // 指定HMTL中使用的变量
      title: 'Webpack Demo',
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      // 用来指定生成 HTML 的模板
      template: './src/index.html',

      // 指定HMTL中使用的变量
      title: '关于我们',

      // 压缩HTML代码
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      },
    }),

    new ESLintPlugin({
      // 自动解决常规的代码报错
      fix: true,
    }),
  ],

  // 开发服务器
  devServer: {

  },
};
