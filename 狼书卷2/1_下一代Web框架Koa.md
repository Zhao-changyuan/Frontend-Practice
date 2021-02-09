### 1.1 Koa 简介

Koa是Node.js的下一代Web框架。异步流程控制特性。

我们可以把它理解成一个基于http模块进行封装的、提供中间件写法的微内核模块。

Koa v2使用显式的ctx作为上下文，语义更清晰。

在微服务架构下所有语言的机会都是一样的。

推荐用async函数作为中间件。

**Koa v2中新增一个ctx参数的最主要原因是，在编写Koa App使用了async箭头函数，在这种情况下，使用this时万万不能的。**

### 1.2 Koa手脚架

koa-generator是用于生成Koa项目骨架的生成器。

提供的功能：

- 生成项目骨架，继承必要的中间件。
- 约定目录结构。

项目骨架结构描述如下：

- app.js为入口。
- bin/www为启动入口
- 支持静态服务器，即public目录
- 支持routes路由目录
- 支持views视图目录
- 默认将Pug（之前名字是Jade）作为模板引擎。

**核心文件app.js**

主要包含4个部分：

- 中间件
- 路由
- 静态服务器
- 视图

赋予ctx.body不同类型的值会返回不同的结果。ctx.render是因为添加了koa-views中间件而绑定到ctx上的，也就是说，我们可以通过中间件在ctx上绑定我们要使用的功能。

public目录是为了方便开发而存在的，一般真正的项目有如下3类：

- 纯API项目，不需要public目录。
- 纯前后端分离项目，后端不需要public目录，前端需要。
- 需要public目录的项目，但会将public目录里的内容分发到CDN上。

编译（模板+数据）=HTML

中间件写法推荐使用async函数。

所有的服务端页面其实都是模板引擎。

### 1.3 Node.js Web框架演进

使用Node.js http模块来创建Web服务是最原始的方式。

任何重复的工作都应该被抽象。

- **app.use的中间件有顺序**。
- 中间件可分类：全局的和局部的（路由里生效的）。
- 中间件的定义方法是function(req, res) {}。



app.callback()里到底是什么呢？

- app是Koa对象。
- app.use里使用的Koa中间件写法。
- app.callback()把app.use里的内容转成了function(req, res){...}。