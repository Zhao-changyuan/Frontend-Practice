## 1. babel

- 目的
  - 将ES6+转成ES5，从而保证，JS在低版本浏览器的兼容性
- 安装
  - `yarn add -D babel-loader @babel/core @babel/preset-env`
- 配置



- @babel/preset-env只能转义基本语法 (promise就不能转换)
- @babel/polyfill （转译所有JS新语法）
  - `yarn add -D @babel/polyfill`
  - `import '@babel/polyfill'`
- core-js（按需转译JS新语法）
  - 安装：`yarn add -D core-js`
  - 配置：
    - 按需加载useBuiltIns: 'usage'
    - 指定版本 corejs: 3

## 2. 使用eslint格式校验

eslint 是一个开源的js代码检查工具，初衷是为了让程序员可以创建自己的检测规则。实际生产中，团队内忘完会指定一套统一的标准，让整个团队的编码风格达到一致。

**安装**

- `yarn add -D eslint eslint-config-airbnb-base eslint-webpack-plugin eslint-plugin-import`
- eslint （校验JS代码格式的工具）
- eslint-config-airbnb-base （最流行的JS代码格式规范）依赖eslint eslint-plugin-import
- eslint-webpack-plugin （Webpack 的 eslint 插件）
- eslint-plugin-import
  - 用于在package.json中读取eslintConfig配置项

**配置**

- eslint-webpack-plugin
  - `const ESLintPlugin = require('eslint-webpack-plugin')`
  - `plugins: [new ESLintPlugin(options)]`
- eslintConfig (package.json)
  - `"eslintConfig": {"extends": "airbnb-base"}`

