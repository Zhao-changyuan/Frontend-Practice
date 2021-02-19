### 4.1 基础知识

#### 4.1.1 地址

在Node.js里有一个非常使用的模块parseurl，它是专门用来解析URL地址的。

像hash、port这样的可能用到的字段在ctx.request里都没有体现，如果需要使用hash或port，可以通过parseurl模块对URL地址进行处理，并将处理结果绑定到ctx上。

#### 4.1.2 HTTP 头部

对于开发者而言，无论是使用，还是性能调优，都必须掌握头部信息的相关内容。因为，浏览器是依靠请求和响应中的头部信息来控制缓存的。

在Koa中处理HTTP头部信息方式：

- 设置：ctx.header（或ctx.headers）中无参数，可用来获取所有的头部信息。
- 获取：ctx.get用来获取特定的头部信息。

HTTP头部信息的实用价值 非常高，尤其是在浏览器缓存方面有非常好的应用。

#### 4.1.3 HTTP动词

HTTP动词这个概念的普及很大程度上要归功于RESTful（标志性状态转移）架构，为了描述装填，HTTP动词被真正地用起来了。

在Koa里可以通过ctx.method来获取HTTP动词。

#### 4.1.4 HTTP状态码

在Koa里，可以采用以下方式获取状态码并对其赋值：

`ctx.status = ctx.response.status`

#### 4.1.5 Cookie

Cookie的处理过程是这样的：服务器端向客户端发送Cookie，客户端的浏览器吧Cookie保存起来，然后在每次请求浏览器时将Cookie发送到服务器端。在HTML文档被发送之前，Web服务器会通过传送HTTP包头中的Set-Cookie消息把一个Cookie发送到用户的浏览器中。

Cookie处理过程中涉及几个比较重要的属性，说明如下：

- name=value：在Cookie中可以用这种方式对内容赋值。
- maxAge：最大失效时间（ms）
- signed：Cookie值签名
- path：Cookie影响到的路径。如果路径不能匹配，浏览器就不发送这个Cookie。
- domain：Cookie影响到的域名。
- secure：值为true时，表示Cookie在HTTP中是无效的，在HTTPS中才有效。
- httpOnly：微软对Cookie做的扩展。如果在Cookie中设置了httpOnly属性，则将无法通过程序读取到Cookie信息，这样可以防止XSS攻击产生。
- Expires：缓存失效时间（s）。

在Node.js中，Cookie是通过response.writeHead被写入的。

### 4.2 获取不同参数的3种方法

| 参数名称 | 描述                                                     | Express中的获取方法 | Koa中的获取方法  | 依赖模块                                               |
| -------- | -------------------------------------------------------- | ------------------- | ---------------- | ------------------------------------------------------ |
| params   | 具名参数，比如/users/:id                                 | req.params          | ctx.params       | Koa需要依赖koa-router，而Express中有内置路由，无需依赖 |
| query    | 查询字符串                                               | req.query           | ctx.query        | 内置，无需依赖                                         |
| body     | 请求体，带有body请求的POST类（POST表单居多）中的body内容 | req.body            | ctx.request.body | Express依赖bodyparser模块，Koa依赖koa-bodyparser模块   |

#### 4.2.1 获取具名参数

带冒号的占位参数是具名参数，一般常用语RESTful API中。

ctx.params

#### 4.2.2 解析请求体

在HTTP请求中，POST、PUT和PATCH类的请求方法中包含请求体，需要单独处理。

可以肯定的一点是，req.body一定是POST类的请求，Koa依赖的中间件里必须包含koa-bodyparser，不然ctx.request.body是没有值的。

#### 4.2.3 获取查询字符串

一般情况下，前端中讲的query是querystring的简写，指的是查询字符串。在Koa中，可以通过ctx.query来获取查询字符串对象。

### 4.3 body解析

#### 4.3.1 模块依赖

koa-parser co-body stream-utils raw-body

#### 4.3.2 原理

常用的处理方式：

| 表单提交类型 | Content-Type                                                 | 说明                    |
| ------------ | ------------------------------------------------------------ | ----------------------- |
| JSON数据     | application/json、application/json-patch+json、application/vnd.api+json、application/csp-report | 使用RESTful API接口设计 |
| form表单     | application/x-www-form-urlencoded                            | 常见的表达交互方式      |
| text文本     | text/plain                                                   | 不常用，特定场景会用    |

#### 4.3.3 常见的POST

- 传输的数据量表GET大
- 安全性相对更高

##### 1. 通用表单处理

通用表单指的是form-data。

koa-multer是一个非常便于使用的文件上传模块，使用koa-multer可以解析body中的流，并将其保存成文件。

koa-multer的用法非常简单，只需要把upload内置的中间件挂载到路由上即可。

koa-multer不会处理multipart/form-data以外的任何表单。

文件上传有两种方式：调用CDN的SDK将文件直接从前端上传到CDN上；采用常规方式，先将文件上传到Node.js服务器，再由Node.js服务器转存到CDN。

##### 2. 普通表单

普通表单对应的Content-Type是x-www-form-urlencoded。

##### 3. 文件上传

上传功能要点说明：

- 要想使用Koa的上传模块koa-multer，需要预先安装它。
- 需要将multer的上传目录配置为根目录下的uploads目录。
- upload变量上的函数有array、singgle、fields等，这些函数均可用来处理文件上传。
- multer的原始做法是通过ctx.req.files来获取上传的文件，然后对API进行调整。

### 4.4 请求的几种方式

#### 4.4.1 表单

#### 4.4.2 AJAX

原始的AJAX代码写起来非常麻烦，所有一般要借助现有的AJAX模块。

#### 4.4.3 命令行

对于程序员来说，在终端进行操作是最高效的方式之一。

#### 4.4.4 HTTP模块

通用的做法是使用http.request函数，它的底层是http.ClientRequest，就是客户端请求。

推荐5个通用的HTTP请求模块:

- request
- superagent
- got
- node-fetch
- axios

##### node-fetch

Fetch API是XMLHttpRequest的替代技术，是W3C的正式标准，是一个简单、标准化的JavaScript的AJAX API。Fetch API提供了一个window.fetch()方法，它被定义在BOM的window对象中，我们可以用它来发起对远程资源的请求。

##### axios

#### 4.4.5 工具软件

Postman

Insomnia也很不多，它是基于Electron打包的跨平台工具。

#### 4.4.6 测试

supertest是著名的用于测试Node.js HTTP服务的模块，它是基于superagent模块升级而成的，对测试App和断言的过程进行了很好的优化。

要点：

- supertest的参数非常简单，只要传入app对象即可。
- 用于测试Web框架时无需启动Web服务器，可以直接进行测试。
- 内置断言，更简单、友好。

将测试框架和supertest模块组合使用会获得更好的效果，比如restful-router是一个结合测试框架使用supertest的例子。

### 4.5 API开发

很明显，API必须要复用。

API是纯I/O应用，这是Node.js擅长的场景。

#### 4.5.1 API的简单写法

一般情况下，我们需要对API响应结果进行封装，将响应的状态和具体的响应数据进行分离。

基于通用约定实现的模块：koa.res.api

app.use(res_api())必须放在app.use(json())后调用。

#### 4.5.2 响应处理

使用Node.js进行API聚合也需要进行响应处理，所以响应处理是Node.js开发汇总相当重要的内容。

比较常见的是使用Lodash的_.get方法，根据对象路径获取值。如果获取的值是undefined，则会赋予解析结果以默认值，有效减少异常处理。

另一种更好的方式是使用TypeScript。

#### 4.5.3 RESTful API

REST是REpresentational State Transfer的缩写，可以翻译成“表现状态转换”，但在绝大多数场合中，我们只说REST。

符合REST设计标准的API，即RESTful API。要想深入理解REST，就要理解REST的5个关键词：资源（Resource）、表述（Representation）、状态转移（State Transfer）、统一接口（Uniform Interface）、超文本驱动（Hypertext Driven）。

RESTful API是以HTTP为依托，还原了URL的本质。

除了需要注意URL路径，我们还要注意HTTP动词的运用。这里采用POST进行创建，使用PATCH进行更新，删除则使用的是DELETE，这些都是基本约定。

理论上，GraphQL和RESTful API是更好的API，不过国内的使用情况却不尽如人意。

#### 4.5.4 API访问鉴权

在保障API接口的安全性上，需要遵循如下原则：

- 有调用者身份。
- 请求具有唯一性。
- 请求的参数不能被篡改。
- 请求有效时间，即API对应的令牌（Token）的有效期要长一些。

目前流行的鉴权方式有两种：JSON Web Tokens（JWT）、OAuth。

在Koa中，还有更好的koa-jwt模块。

#### 4.5.5 OAuth鉴权

OAuth 2.0是OAuth协议的下一版本。OAuth 2.0关注开发的简易性。

OAuth 2.0的运行步骤如下：

- 用户打开客户端以后，客户端要求用户给予授权。
- 用户统一给予客户端授权。
- 客户端使用上一步获得的授权，向认证服务器申请令牌。
- 认证服务器对客户端进行认证以后，确认无误，同意发放令牌。
- 客户端使用令牌，向资源服务器申请获取资源。
- 资源服务器确认令牌无误，同意向客户端开发资源。

我们可以通过oauth2-server模块来完成OAuth鉴权过程。

### 4.6 常用中间件

- 会话是最常见的，用来保持客户端和服务器端的状态。
- ETag是Web缓存优化的常见中间件。
- 验证码是采用OTP封装的中间件。
- 限制访问频率是对抗暴力破解的有效手段。

#### 4.6.1 会话

当客户端浏览器访问服务器的时候，服务器会将包客户端信息以某种形式记录下来，这就是会话。当客户端浏览器再次访问服务器时，只需要从该会话中查找用户的状态即可。

相关模块：

- koa-session
- koa-generic-session：Session Store的抽象层，目标是让会话能够存储在Redis或MongoDB等自定义持久化存储中。它内置了Memory Store，即内存存储。例如，koa-redis是基于Redis存储的，koa-generic-session-mongo是基于MongoDB存储的。

Session Store其实就是将会话存储在不同持久化存储以后抽象出来的通用层，其基本的存、取和销毁操作如下：

- get(sid)：根据sid来获取会话信息
- set(sid, sess, ttl)：通过sid设置会话信息，ttl指的是会话可存活时间（ms）。
- destory(sid)：根据sid销毁会话。

#### 4.6.2 ETag

ETag在服务器端生成后，客户端将通过If-Match或If-None-Match条件判断请求来验证资源是否被修改，其中比较常用的是If-None-Match。如果资源没有被修改则返回304状态码，如果被修改则返回正常值。

在Koa里，我们需要使用koa-conditional-get和koa-etag插件来提供ETag功能。

ETag的核心实现就是koa-etag模块，首先要获取entity，一般是ctx.body的内容，然后etag模块会计算出ETag的值，并将这个值赋给ctx.response.etag。

#### 4.6.3 验证码

OTP的全称为One-time Password，也称动态口令，是根据专门的算法每隔60s生成的一个与时间相关的、不可预测的随机数字组合（即口令），每个口令只能使用一次，每天可以产生43200个口令。

OTP分两种，HOTP和TOTP。HOTP是基于加法计数器和静态对称秘钥的算法。TOTP是基于时间的一次性密码算法，是支持将事件作为动态因素的，基于HMAC一次性密码算法的扩展算法。

#### 4.6.4 限制访问频率

最简单也最好的办法是利用Redis和expire命令。其实使用MongoDB也可以，MongoDB可以通过TTL的索引特性实现TTL集合，TTL可以通过一个后台线程读取索引中的值，然后清除过期的集合。

每次请求来到时，都需要先从缓存中查询一下， 如果相应的Key存在就不做任何处理，如果不存在就发短信，并将此Key保存到缓存中。还可以使用ratelimiter模块，可以通过限制用户的连接频率来防止暴力破解类的攻击。