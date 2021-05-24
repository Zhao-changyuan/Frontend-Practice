## 8.1 产品原型

## 8.2 技术选型

### 8.2.1 服务端

#### 1. MongoDB 数据库

#### 2. Egg.js 框架

Egg.js 作为服务端开发框架，它是基于 Koa 的增强功能。

相比 Express，Egg.js 奉行“约定大与配置”的原则，可以降低团队协作的成本。并且它拥有丰富的插件生态，其中集成了 ORM、WebSocket 和 Mongoose 等功能。

### 8.2.2 Web 前端

#### 1.Dva.js 框架

Dva.js 是一个基于 Redux、Redux-Saga 和 React-Router 的轻量级前端框架，同时它也集成了 Fetch API。

React-Redux 中的数据流动局限在应用本身，无法实现异步请求等附加作用，而使用 Redux 中间件可以实现这些附加作用。常用的中间件有 Redux-Thunk 和 Redux-Saga。

官网已不推荐使用，

dva-cli is deprecated, please use create-umi instead, checkout https://umijs.org/guide/create-umi-app.html for detail.

Dva.js 实现了对 React 应用数据流动和数据请求的良好管理。

#### 2. Umi.js 框架

Umi.js 是一套新兴的企业级前端应用框架。

#### 3. Ant Design 组件库

## 8.3 项目开发

### 8.3.1 注册与登录

#### 1. 后端项目搭建

#### 2. 注册 API

#### 3. 登录 API

#### 4. 前端项目搭建

8.2 节介绍了 React 生态的相关技术，如 Dva.js、Umi.js 及 Ant Design。Ant Design 官方的模板项目 Ant Design Pro 集成了三者。

React 官方推荐在 componentDidMount 生命周期而非 componentWillMount 生命周期中进行数据初始化获取功能，因为在引入 Fiber 架构之后 componentWillMount 可能执行多次，而 componentDidMount 只会执行一次。

## 8.4 项目部署与测试

由于 Egg.js 官方已经集成了 egg-cluster 和 egg-scripts 等模块用于启动进程，可以不使用类似 PM2 的守护进程工具。

### 8.4.2 E2E 测试

![](https://lark-assets-prod-aliyun.oss-cn-hangzhou.aliyuncs.com/yuque/0/2021/png/21377645/1619686348901-resources/19891056/png/6a2afb21-0397-4ed8-8c40-3562606b8e83.png?OSSAccessKeyId=LTAI4GGhPJmQ4HWCmhDAn4F5&Expires=1619688151&Signature=4rvhXUcM%2FRqcOgzf0DJeTAD8OI4%3D)

成熟的质量体系需要保证端到端的质量，即前端到后端（Frontend to Backend），又称为 E2E。常见的 E2E 解决方案有如下几种：

- Selenium
- Nightwatch.js
- Puppeteer
- Cypress
