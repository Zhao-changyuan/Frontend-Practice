它因后端简化并发编程而被关注，因作为前端辅助开发工具而流行，因异步流程控制和回调地狱而被人诟病，因npm批量安装模块而被人敬仰。

### 1.1 引子

### 1.2 JavaScript

最小功效原则——选择最合适的解决方案而不是最强的，语言的功效越弱，对于存储在该语言中的数据，我们能做的事情就越多。

> 任何能够用JavaScript实现的应用系统，最终都必将用JavaScript实现。

### 1.3 什么是Node.js

#### 1.3.1 Node.js概述

- Node.js是JavaScript的运行时环境。
- Chrome V8引擎。
- 轻量且高效。
- 使用npm作为包管理工具。
- 将等待中的I/O任务放到事件循环中，事件循环由libuv提供。
- 事件循环负责将文件I/O任务放到线程池中，线程池由libuv提供。网路I/O任务不通过线程池完成。

Node.js在接受任务的时候是单线程的，无需切换进程/线程，非常高效，但它在执行具体任务的时候是多线程的。

#### 1.3.2 Node.js的特点

Node.js是可扩展的适合用于构建高性能Web应用的最简单的解决方案。

**适合构建Web应用**

1. 构建网站，指构建传统网站，不进行前后端分离。
2. 构建API，API的写法很多，最为推荐的写法是对返回的数据加壳。
3. 构建RPC服务，在微服务架构十分流行的今天，服务化已经是必经之路，其中使用最多的就是RPC（Remote Procedure Call，远程过程调用）协议服务，常见的做法是将数据库访问返回的数据，以TCP形式传输给调用方。
4. 前后端分离。

**高性能**

- 执行速度快
- 天生异步
- 适用于I/O密集的网络应用开发

Node.js苦了自己却让更多人能够轻松实现并发编程，并以最小的成本获得更高的性能。

**简单**

- 语法简单
- 并发编程简单
- 部署运维简单
- 开发简单

**可扩展**

- 可以使用npm上的大量模块
- 可以通过编写C/C++扩展实现CPU密集型任务
- 可以轻松搭配Java、Rust等语言使用
- 架构互补

#### 1.3.4 Node.js的应用场景

> Node.js in Action一书中说“Node.js所针对的应用程序有个专门的简称——DIRT，表示数据密集型实时（Date-Intensive Real-Time）程序。因为Node.js自身在I/O上是非常轻量级的，善于将数据从一个管道混排或代理到另一个管道中，这在处理大量请求时会持有很多开放的连接，并且只占用一小部分内存，可以保证响应能力，与浏览器一样。”





