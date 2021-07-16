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

## 2. 自定义plugin

webpack插件是一个具有apply方法的JavaScript对象。apply方法会被Webpack compiler调用，并且在整个编译生命周期都可以访问compiler对象。

- 原理
  - 通过在生命周期的钩子中挂在函数，来实现功能扩展。



**生命周期：**

生命周期就是整个生命过程中的关键节点

**钩子：**

- 钩子是提前在可能增加功能的点，埋好（预设）一个函数
- 声明周期中的函数

### 2.1 webpack 常用钩子

| 钩子        | 描述                 | 类型            |
| ----------- | -------------------- | --------------- |
| environment | 环境准备好了         | SyncHook        |
| compile     | 编译开始             | SyncHook        |
| compilation | 编译结束             | SyncHook        |
| emit        | 打包资源到output之前 | AsyncSeriesHook |
| afterEmit   | 打包资源到output之后 | AsyncSeriesHook |
| done        | 打包完成             | SyncHook        |

## 3. 自定义loader

- Loader 本质上就是一个ESM模块，它导出一个函数，在函数中对打包资源进行转换。

loader机制：

- 要求最终转换的结果必须是一个JS代码
- 建议使用module.exports导出一个普通函数，否者无法通过loader-utils拿到options

安装获取自定义loader参数的插件：

- `yarn add -D loader-utils`

## 4. 代码分离