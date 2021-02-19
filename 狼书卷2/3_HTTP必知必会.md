### 3.1 请求响应模型

在用户代理和资源服务器中间可能存在多个“中间层”，比如代理服务器、网关和隧道。

#### 3.1.1 请求

req.method是请求发送过来的HTTP动词。req.url是请求的URL地址。

#### 3.1.2 响应

res是指服务器返回给浏览器的响应，即服务器响应，作用是告诉浏览器如何完成渲染工作。

res.end方法是最“简单粗暴”的详浏览器写入数据的方法。其实Node.js SDK中提供了两个方法，分别是res.write(chunk, encoding)和res.end(data[, callback])。我们可以这样理解，HTTP内部声明了一个body变量，res.write是向body中写入内容的方法；而res.end()完成了两项内容，分别是将参数data（如果有）放到body里，以及向浏览器发送body中的所有数据。

具体端口号可以通过app.address().port来获取。

#### 3.1.3 核心要点

- HTTP是Web应用开发的基础，我们要对协议及其应用场景有深入理解。
- EventEmiter主要负责事件监听和处理，异步处理集合事件驱动可以获得更好的性能和易用性。
- Stream将请求响应过程抽象成一个流并在内存中传递，便于进行大文件处理，能够提高扩展性。

##### Stream

主要是对I/O输入输出的抽象，核心有以下两点：

- 可以将一个大型的系统拆分成一些很小的部分作为流的一部分，通过将它们任意组装，甚至可以实现高级的流程控制。
- 不同部分之间的数据通过管道传递，在UNIX、Linux中可以使用“|”符号来实现流。

在Node.js中，流模块的基本操作符是.pipe，通过它可以直接将上一步的结果作为下一步的输入，这是非常高效的做法，由其适合Gulp等I/O密集型操作。

为什么推荐使用Stream呢？好处如下：

- Node.js中的I/O操作是异步的，处理起来非常麻烦，而流式的I/O处理更简单高效。
- 基于Buffer数据结构进行操作时可以节省内存，适合处理大文件。
- 包含事件机制（继承自EventEmiter），具有更高的效率和更好的扩展性。
- 可以通过pipe方法轻松第连接流和流之间的处理过程，易于组装。

比较常用的4种流类型：

| 使用场景 | 类型      | 需要实现的方法                   |
| -------- | --------- | -------------------------------- |
| 只读     | Readable  | _read                            |
| 只写     | Writable  | `_write、_wirtev、_final`        |
| 双工     | Duplex    | `_read、_write、_wirtev、_final` |
| 转换     | Transform | `_transform、_flush、_final`     |

**1. 原理**

Stream的精髓是将上一个输出作为下一个输入。

请求传递与过滤是Web Server中非常重要的功能。

很明显，HTTP连接中的request对象是可读流（Stream.Readable），而response对象是完整的可读可写流（Stream.Duplex）。

所有的HTTP过程都是IncomingMessage和OutgoingMessage的过程，其对应的就是请求和响应的过程。

**2. 文件操作**

大文件选择Stream作为读写方法时最好的。

**3. 转换模块**

Gulp是Node.js世界里基于Stream实现的最著名的流式高效构建工具。

**4. HTTP代理**

原则上，能够使用Node.js SDK完成的任务，尽量少用第三方模块。

##### EventEmitter

Vue中EventBus提供的$emit和$on就是与Node.js的EventEmitter非常相似。

请求和响应常见的时间有一下几类：

- data：当有数据可读时触发。
- end：没有更多的数据可读时触发。
- error：接收和写入过程中发生错误时触发。
- finish：所有数据已被写入底层系统时触发。

**1. 请求事件**

**2. 响应事件**

支持的事件包括close、finish、error等。HTTP本身是无状态的，一次请求只需响应一次，所以响应后请求就会被销毁。

##### HTTP模块源码解读

对于Node.js源码里的JavaScript代码还是建议大家深入了解，因为这些代码与开发息息相关，至关重要。

### 3.2 HTTPS

HTTPS在网络传输过程中主要使用SSL/TLS进行加密，是目前最安全的方式。

- SSL：Secure Socket Layer，安全套接字层，位于可靠的面向连接的网络协议层和应用协议层之间的一种协议层。SSL通过相互认证、使用数字签名确保完整性、使用加密确保私密性，以实现客户端和服务端的通信安全。SSL由两部分组成，分别是SSL记录协议和SSL握手协议。
- TLS：Transport Layer Security，安全传输层协议，用于保证两个应用程序之间的保密性和数据完整性。该协议由两部分组成，分别是TLS记录协议和TLS握手协议。

HTTPS涉及的主体有3个：

- 客户端：通常指浏览器，也可以是自己编写的各种语言的客户端程序。
- 服务器：一般指支持HTTPS的网站
- 证书颁发（Certificate Authorities，CA）机构。

#### 3.2.1 生成证书

验证HTTPS是否生效的最简单方式是通过DNS模式进行验证。

Let's Encrypt申请的证书会有三个月的有效期，可以在到期前手动续约，也可以自己编写定时脚本任务完成自动签约。

#### 3.2.2 Node.js服务器HTTPS配置

#### 3.2.3 Node.js 服务器HTTPS配置

helmet是非常使用的Node.js安全模块，可以轻松加固一些与完全性相关的HTTP头。

#### 3.2.4 Nginx HTTPS配置

#### 3.2.5 Nginx HTTPS反向代理配置

部署大部分的Node.js应用时，我们都会选择在Node.js Server之前加一层Nginx，不是因为Node.js无法进行反向代理，而是因为使用Nginx从架构层面上更加合理。

目前的一些云平台也都用Nginx做负载。

### 3.3 代理

#### 3.3.1 协议支持

##### HTTP

使用Node.js实现此功能时只需两个方法（http.createServer和http.request）即可轻松搞定。

##### HTTPS

Node.js内置了net模块，是专门用来处理socket连接的。

##### 推荐模块

#### 3.3.2 mini-proxy

mini-proxy是基于Node.js的“迷你易用”的透明Web代理，完美支持HTTP和HTTPS，功能强大，是许多人学习过程中最喜欢的模块。

#### 3.3.3 hiproxy

hiproxy是一个基于Node.js开发的轻量级网路代理工具，主要是为了解决开发者在开发过程中遇到的host管理和反向代理的问题。