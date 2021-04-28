## 7.1 跨域

### 7.1.1 同源策略

同源策略（Same Origin Policy）是由Netscape提出的一个著名的安全策略。

#### 1. 同源的定义

如果两个页面的协议、端口和主机都相同，则认为这两个页面具有相同的源，即同源。

#### 2. 同源的意义

以Cookie为例

#### 3. 限制范围

除了限制Cookie的访问外，同源策略的安全限制还包含如下3个方面：

- LocalStorage、SessionStorage和IndexDB无法读取；
- DOM对象模型无法获取；
- AJAX请求不能发送。

### 7.1.2 跨域方案

#### 1. JSONP方案

HTML中有一部分用户获取资源的标签是运行跨域的，如script、img、link和iframe。

#### 2. CORS方案

Cross-Origin Resource Sharing 跨源资源分享，使用额外的HTTP头来告诉浏览器，让运行在一个origin (domain)上的Web应用被准许防伪来自不同源服务器上的指定资源。



当发生CORS跨域请求时，浏览器会发出一个Options的预检（Preflight）请求。预检请求包含如下3个关键头信息：

1. Origin：请求源；
2. Access-Control-Request-Method：浏览器的CORS请求会用到的HTTP方法；
3. Access-Control-Request-Headers：浏览器的CORS请求会额外发送的头信息字段；

服务端接收到预检请求后会检查上述请求头，确认运行跨域请求并做出响应。响应中包含如下3个关键的头信息：

1. Access-Control-Allow-Origin：允许的请求源；
2. Access-Control-Allow-Methods：允许浏览器的CORS请求的HTTP方法；
3. Access-Control-Allow-Headers：运行浏览器的CORS请求的HTTP头信息字段。

#### 3. Proxy方案

Proxy的原理是通过一个同域的Web服务来接收前端的AJAX请求，然后将其转发目标Web服务上。

## 7.2 鉴权

主流的鉴权方法有如下两种：

- Session
- Token

JWT JSON Web Token

### 7.2.1 Session机制

Session作为一种服务端记录用户状态的机制。

### 7.2.2 JWT标准

JWT （JSON Web Token）是一套开放的标准，它定义了安全传输的方法，传输内容基于JSON格式。

JWT通常有3部分组成，即消息体（payload）、头信息（header）和签名（signature）。

#### 1.消息体

消息体即需要传输的内容，基于JSON格式。

JWT构造时会对详细体进行Base64编码。

Base64只起到编码作用，并不能用来加密。

#### 2. 头信息

头信息指定了该JWT使用的签名算法。

JWT构造时同样会对头信息进行编码。

#### 3. 签名

签名是正对消息体和头信息而言。

JWT相比Session的优势：

- JWT存储在客户端，可以换机服务器Session的存储压力；
- JWT存储在客户端，更易于水平扩展，从而实现单点登录（SSO）

隐患和不足：

- JWT信息经过Base64编码后很容易解码，因此信息不会被假面，只能通过签名放置篡改，因此必须使用HTTPS来加密通信过程，否则信息完全会被泄露；

## 7.3 缓存

### 7.3.1 Redis方案

主流的缓存解决方案有Redis和Memcached。

首选Redis

#### 1. 安装和命令

redis-cli进入命令行



**输入密码：**

auth password

#### 2. 开发与应用

可以将Session数据存储到Redis中，从而大大提升读写Session的性能。

#### 3. 设计经验和常见问题

Redis的高性能主要基于如下两个方面：

- 基于内存而非硬盘
- 高性能的设计和实现：例如，基于I/O多路复用模型，单线程设计配合内存高速读取满足高并发、高性能需求。

### 7.3.2 单点登录

#### 1. Session单点登录

实现基于Session的单点登录，需要依赖Redis服务。

基于Session单点登录的客户点凭证默认是基于浏览器Cookie实现的。

#### 2. JWT单点登录

基于JWT实现的单点登录相比Session更加简单，因为无需依赖Redis等缓存服务做Session共享，也无须依赖于Cookie的跨域限制和共享机制。

基于JWT实现的SSO，只需要在浏览器端端将获取的token保存下载，根据不同的业务需求可以保存至Cookie、SessionStorage或LocalStorage中，然后添加至后续的HTTP请求头中，便可以通过校验实现单点登录的效果。

## 7.4 对象——关系映射

### 7.4.1 Sequelize——关系型数据库的ORM实现

- Sequelize
  -  Sequelize是一个基于Promise的Node ORM框架
- BookShelf
- TypeORM，TypeScript开发时推荐使用。



#### 1. 连接数据库

#### 2. 数据库表建模

#### 3. 关联表查询

#### 4. 事务

#### 5. 迁移

`yarn global add sequelize-cli`

### 7.4.2 Mongoose——MongoDB的ORM实现

在Node开发中，最常用的MongoDB的ORM实现便是Mongoose。

#### 1. 连接数据库

#### 2. 插入

#### 3. 查询

#### 4. 聚合

MongoDB中的聚合（Aggregate）主要用于处理数据，如统计平均值、求和等计算，类似SQL中的count(*)等函数操作。