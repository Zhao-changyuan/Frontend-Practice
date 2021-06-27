## 1. 区分打包环境

- 通过环境变量区分

  - webpack --env.production
  - webpack.config.js中判断env

- 通过配置文件区分

  - webpack.dev.conf.js
  - webpack.prod.confg.js
  - 执行打包时，指定配置文件（`webpack --config webpack.[dev|prod].conf.js`）

  

### 1.2 webpack通过环境变量区分打包

- 命令行中设置环境变量
  - webpack 4: `webpack --env.production`
  - webpack 5: `webpack --env production`
- webpack.config.js
  - 读取环境遍历env.production
  - 根据环境遍历指定不同的配置

