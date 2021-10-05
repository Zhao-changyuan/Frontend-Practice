// 生产环境配置文件

const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');

const prodWebpackConfig = merge(baseWebpackConfig, {
  // 这里是生产模式对应的配置
  mode: 'production',

  plugins: [
    new webpack.DefinePlugin({
      // 开发环境下的接口地址
      API_BASE_URL: JSON.stringify('http://apiprod.example.com'),
    }),

    // 压缩CSS
    new OptimizeCssAssetsPlugin(),

    // HMTL的配置
    new HtmlWebpackPlugin({
      // 指定打包后的文件名称
      filename: 'index.html',

      // 用来指定生成 HTML 的模板
      template: './src/index.ejs',

      // 指定HMTL中使用的变量
      title: 'Webpack Demo',

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
    new HtmlWebpackPlugin({
      filename: 'about.html',
      // 用来指定生成 HTML 的模板
      template: './src/index.ejs',

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
  ],
});

module.exports = prodWebpackConfig;
