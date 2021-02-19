在Koa世界里，中间件是核心中的核心，只有掌握了中间件，才算掌握了框架的精髓。

### 2.1 中间件

#### 2.1.1 什么是中间件

中间件 框架的扩展机制，主要用于抽象HTTP请求过程。

如果把一个HTTP处理过程比作污水处理，那么中间件就像一层层的过滤网。每个中间件在HTTP处理过程中通过改写请求和响应数据、状态，实现了特定的功能。

过滤的先后顺序和挂载中间件的顺序有关，越靠前的中间件越早执行。

ES6里面一边循环一边计算的机制称为生成器。

ES6 Generator中间件内部使用this作为隐式的上下文，这在JavaScript里是分厂容易用错的。

Koa v2中ctx是上下文，包括所有的请求和响应；而next()是确定当前中间件是否将请求向下一个中间件放行的函数。

async函数的优势如下：

- 语义更好
- 无需执行器，比Generator+co的解决方案强很多。
- await可以无缝调用异步Promise方法，更好地向后兼容。

#### 2.1.2 上下文对象

在Web应用中，Koa的上下文对象ctx是一次完整的HTTP请求的上下文，贯穿这个请求的生命周期。请求会经过N（N > 0）层中间件的拦截，唯一共享的就是这个上下文对象。它主要封装了request对象和response对象，并提供了一些帮助开发者编写业务逻辑的方法，我们可以在ctx.request和ctx.response中很方便地访问这些方法。

ctx的生命周期是贯穿整个HTTP请求过程的。在ctx上绑定内容不是一个好的做法，但适当地在ctx上下文中绑定某些内容是必要的，这样座能够让我们更方便地实现业务逻辑。

ctx上常用的对象有request、response、req、res等，其中request和response是Koa内置的对象，是对HTTP的使用扩展；而req和res是在http.createServer回调函数里注入的，即未经加工的原生内置对象。

- context.request = Object.create(this.request)是Koa内置的request对象。
- context.response = Object.create(this.response )是Koa内置的response 对象。
- context.app = requset.app = response.app = this是app自身。
- context.req = 是原始HTTP回调函数里的req对象。
- context.res  是原始HTTP回调函数里的res对象。
- context.originalUrl是最初的URL地址。
- context.cookies是浏览器Cookie封装。
- context.state = {}约定了一个中间件的公用存储空间，可以存储一些数据。

##### **request对象和response对象**

与请求相关的方法都被放到了ctx.request中，与响应相关的方法则被挂载在ctx.response上。

##### **与浏览器端进行交互**

Koa框架与浏览器交互的方式主要是让服务器对浏览器进行响应，可用方法如下：

- ctx.body（Koa 内置）
- ctx.redirect （Koa内置）
- ctx.render（外部中间件）

**1. ctx.body**

ctx.body能够以最精简的代码实现最多的功能，返回文本、返回HTML、返回JSON。

ctx.body的工作原理是根据赋值类型来进行不同的Content-Type的处理，分两步：

- 根据body的类型设置对应的Content-Type
- 根据Content-Type调用res.write或res.end，将数据写入浏览器。

**2. ctx.redirect**

浏览器重定向只有两种情况，向前重定向和向后重定向。

**3. ctx.render**

ctx.render是渲染模板使用的方法。

#### 2.1.3 回形针一样的中间件

中间件叠加之后，请求和响应同时拦截就会形成类似回形针一样的调用。

只要有一个中间件处理了请求，这次请求就算结束。

##### 中间件执行顺序

Koa的中间件能对请求做出处理，也能对响应做出处理。

当一个请求过来的时候，会依次被各个中间件处理，中间件跳转的信号是next()，当请求到达某个中间件，且该中间件处理完请求不执行next()时，程序就会逆序执行前面中间件剩下的逻辑。

#### 2.1.4 常用中间件

大致可分为三类：

- Pre-Request：通常用来改写请求的原始数据。
- Request/Response：大部分中间都在这里，功能各异。
- Post-Response：进行全局异常处理，改写响应数据等。

### 2.2 路由

Koa是小而美的设计，更利于开发者进行深度定制。

#### 2.2.1 koa-router

##### 为什么会有路由

一个完整的Web工程需要提供很多服务，在这种情况下，多URL的弊端也是极其明显的。

路由的本质其实就是对ctx.path进行抽象。

路由的实现原理简单如下：

- 定义路由
- 路由的路径会被转义成正则表达式。
- 匹配请求，使用中间件进行处理。

koa-router模块的核心是路由解析，使用的是path-to-regxp模块。

中间件决定了路由的定义方式。

#### 2.2.2 路由详解

##### 路由常见用法

匹配请求时只和路径有关，Query String是不会被考虑在内的。

具名路由指的是路径包含占位符:xxx的。具名路由参数通过ctx.params来获取。

koa-router的路由也可以用正则表达式来处理。

嵌套路由用于不同实体之间是一对多的关系。



##### 路由也是中间件

多种中间件组成的路由可以完成如下事情：

- 解耦代码，将代码拆分得更细致。
- 实现模块化，通过组装中间件来完成逻辑。
- 实现权限类、日志类的AOP（面向切面编程）
- 实现与Hook（钩子代码）类似的抽象。

##### HTTP动词

其实真正能把CRUD写明白也不是一件容易的事。

CRUD对应的请求方法：

- get：用于请求资源
- post：用于创建资源
- path：用于更新资源
- delete：用于删除资源

##### 其他方法

router.all可以匹配所有的HTTP动词，但除了这一点，router.all几乎无其他任何优势。它只能完成与表单无关的功能。注意，真正的业务代码中不推荐使用这种功能。

#### 2.2.3 将路由放到目录里

把可变的路由抽取到目录里，可以让路由定义更灵活，做到耦合程度更低。

### 2.3 视图

#### 2.3.1 koa-views

Koa提供了ctx.state内置对象，并将其作为上下文状态存储。编译模板引擎的时候，模板引擎中的data和ctx.state会合并，合并结果将作为模板引擎使用的最终data。

#### 2.3.2 默认模板引擎Pug

原名Jade

#### 2.3.3 views目录模板说明

我们可以通过ctx.render来渲染模板引擎。ctx.render的参数包括以下两个：

- 模板文件，其实就是views/index.pug，相对位置在views目录下。
- 模板编译需要的数据：普通的JSON数据即可。

使用布局的好处是非常明显的，由其是当多个页面复用统一的布局时。

#### 2.3.4 consolidate.js

consolidate.js是一款JavaScript模板引擎整合模块，支持现今流行的多种模板引擎，是功能强大的模板引擎整合库。

模板引擎本身是耗时且费力的操作，所以一般要加上视图层的模板编译处理，这样性能压测的结果会差一些。

其实，最简单高效的优化思路还是为其加上模板编译结果的缓存。

### 2.4 静态服务模块

#### 2.4.1 koa-static

即使是十年以上的开发者依然有很多细节需要学习。

#### 2.4.2 koa-send

其中ctx.type是根据文件后缀来设置Content-Type的便捷写法。

koa-send功能如下：

- 设置Content-Type，可通过文件后缀进行设置。
- 以Stream的形式为ctx.body赋值，这种方式比fs.readFileSync更高效。

#### 2.4.3 koa-mount

koa-static如果想指定静态服务器的请求前缀，需要用到koa-mount。

koa-mount是一个将中间件挂载到指定路径的Koa中间件。它可以挂载任意Koa中间件。

#### 2.4.4 koa-serve-static