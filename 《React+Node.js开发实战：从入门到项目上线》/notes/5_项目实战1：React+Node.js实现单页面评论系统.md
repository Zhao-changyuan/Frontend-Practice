## 5.1 研发流程

需求分析->产品原型->UI设计->交互设计->

开发->测试->发布上线->系统运维

## 5.2 产品原型

## 5.3 技术选型

### 5.3.1 前端技术

#### 1. Fatch API

#### 2. Material-UI组件库

在全球范围内，最流行、使用者最多的设计规范当属Material Design，同时它也是Android原生系统的设计语言。

Material-UI是一款Material Design风格的React组件库。

### 5.3.2 后端技术

#### 1. 脚手架Express

路由是Express的核心功能之一。

在监听到HTTP请求后，**Express会自上而下地根据请求路径进行严格匹配。**如果匹配成功并且结束响应，就不会继续往下匹配了，除非回调函数中调用了next。

请求体可以通过Express的req.body进行访问，但是需要使用请求体解析的中间件，否则会得到undefined值。之间解是Express中一个非常重要的概念，而Express是一个自身功能极简、完全由路由的中间件构成的Web开发框架。从本质上说，一个Express应用就是在调用各种中间件。

在Express中，通过调用app.use()方法向“管道”中插入中间件。

#### 2. 数据库lowdb

lowdb是一款轻量级的本地存储 NoSQL数据库，它适用于构建不依赖数据库服务器的项目，如Node、Electron和浏览器等小型项目。

## 5.4 项目开发

React Router是完整的React路由解决方案，作用是保持UI与URL同步。

作为Facebook的官方React脚手架工具，create-react-app工具非常方便易用，这主要得益于将配置好的Webpack、Babel、ESLint都合并到react-scripts的NPM包中，实现了开箱即用。

## 5.5 测试部署

### 5.5.1 接口测试

- 按照测试方法分类，测试分为白盒测试和黑盒测试等；
- 按照测试阶段分类，测试分为单元测试、集成测试、系统测试和回归测试等；
- 按照测试内容分为，测试分为功能测试、性能测试、负载测试、安全性测试和兼容性测试等。

Node可选测试工具：

1. Jest
2. Mocha
3. Jasmine

以Mocha为例：

#### 1. 测试接口的功能

#### 2. 测试接口代码的覆盖率

nyc

### 5.5.2 项目部署

