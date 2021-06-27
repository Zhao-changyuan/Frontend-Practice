## 1. 区分打包环境

- 通过环境变量区分

  - webpack --env.production
  - webpack.config.js中判断env

- 通过配置文件区分

  - webpack.dev.conf.js
  - webpack.prod.confg.js
  - 执行打包时，指定配置文件（`webpack --config webpack.[dev|prod].conf.js`）

  

### 1.1 webpack通过环境变量区分打包

- 命令行中设置环境变量
  - webpack 4: `webpack --env.production`
  - webpack 5: `webpack --env production`
- webpack.config.js
  - 读取环境遍历env.production
  - 根据环境遍历指定不同的配置

### 1.2 通过配置文件区分

- webpack.dev.conf.js (mode: development)
- webpack.prod.conf.js (mode: production)
- webpack.base.conf.js (公共配置)



- webpack-merge

  - 将多个配置合并在一起

  

### 1.3 Webpack DefinePlugin

是为配置注入全局变量

如开发环境和生产环境的借口地址不同

DefinePlugin中定义的变量要求是一个代码片段

