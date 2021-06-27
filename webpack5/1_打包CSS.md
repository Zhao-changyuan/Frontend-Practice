1. 打包逻辑
2. 打包less
3. 打包成独立的css文件
4. 添加样式前缀
5. 格式校验
6. 压缩css



## 1. 打包CSS

- 非JS文件打包，需要对应的loader
  - css-loader将CSS转化为JS（将CSS输出到打包后的JS文件中）
  - style-loader把包含CSS内容的JS代码，挂载到页面的`<style>`标签当中
- 引入CSS `import './css/main.css'`
- 安装 `npm i css-loader style-loader -D`
- 配置
  - 匹配后缀名： `test: /\.css$/i`
  - 指定加载器：`use: ['style-loader', 'css-loader']`

Loader执行顺序：先右后左，先下后上。

## 2. 打包less

- 引入less `import './css/main.less'`
- 安装 `npm i less less-loader -D`
- 配置
  - 匹配后缀名： `test: /\.less$/i`
  - 指定加载器：`use: ['style-loader', 'css-loader', 'less-loader']`

## 3. 将CSS打包成独立的文件

- 安装插件
  - npm install mini-css-extract-plugin -D
- 引入插件
  - `const MiniCssExtractPlugin = require('mini-css-extract-plugin')`
- 替换style-loader`use: ['MiniCssExtractPlugin.loader', 'css-loader']`
  - style-loader：将CSS打包到`<style>`标签中
  - MiniCssExtractPlugin.loader：将CSS打包到独立文件中
- 配置插件（`new MiniCssExtractPlugin({})`）

## 4. 添加样式前缀

- 安装
  - `npm install postcss-loader autoprefixer -D`
- 配置 webpack.config.js
  - `use: ['MiniExtractPlugin.loader', 'css-loader', 'postcss-loader']`
- 新建 postcss.config.js
  - plugins: [require('autoprefixer')]
- 配置需要兼容的浏览器
  - package.json 中指定 browserslist

## 5. 校验CSS代码格式

- 安装
  - `npm i stylelint stylelint-config-standard stylelint-webpack-plugin -D`
- 引入
  - `const StylelintPlugin = require('stylelint-webpack-plugin')`
- 配置
  - `new StylelintPlugin({})`
- 指定校验规则（在package.json中指定stylelint）
  - `"stylelint": { "extends": "stylelint-config-standard" }`



- stylelint中定义了很多CSS编写校验规则。

- stylelint-config-standard，具体的规则集
- stylelint-webpack-plugin

## 6. 压缩CSS

- 安装
  - `npm install optimize-css-assets-webpack-plugin -D`
- 引入
  - `const OptimizeCssAssetsWebpackPlugin = require('...')`
- 配置
  - `new OptimizeCssAssetsWebpackPlugin()`