## 1. babel

- 目的
  - 将ES6+转成ES5，从而保证，JS在低版本浏览器的兼容性
- 安装
  - `yarn add -D babel-loader @babel/core @babel/preset-env`
- 配置



- @babel/preset-env只能转义基本语法 (promise就不能转换)
- @babel/polyfill （转译所有JS新语法）
  - `yarn add -D @babel/polyfill`
  - `impot '@babel/polyfill'`
- core-js（按需转译JS新语法）
  - 安装：`yarn add -D core-js`
  - 配置：
    - 按需加载useBuiltIns: 'usage'
    - 指定版本 corejs: 3

## 2. 格式校验

**安装**

- `yarn add -D eslint eslint-config-airbnb-base eslint-webpack-plugin eslint-plugin-import`
- eslint （校验JS代码格式的工具）
- eslint-config-airbnb-base （最流行的JS代码格式规范）
- eslint-webpack-plugin （Webpack 的 eslint 插件）
- eslint-plugin-import
  - 用于在package.json中读取eslintConfig配置项

**配置**

- eslint-webpack-plugin
  - `const ESLintPlugin = require('eslint-webpack-plugin')`
  - `plugins: [new ESLintPlugin(options)]`
- eslintConfig (package.json)
  - `"eslintConfig": {"extends": "airbnb-base"}`

