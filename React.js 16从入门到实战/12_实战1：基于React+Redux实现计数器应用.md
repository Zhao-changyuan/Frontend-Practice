#### 12.1 设计思想

Redux设计的核心就是Store这个概念，它是将State、Action和Reducer联系在一起的关键。Redux应用中有且仅有一个Store。

Action是负责把数据从应用传到Store的载体，是Store数据的唯一来源，具体是通过Store对象的dispatch()方法来实现的。

Reducer负责将State（状态）的变化和相应Action发送的Store，然后返回新的State（状态）。简单来说，就是接收旧的State（状态）的变化，并返回新的State（状态）给Store。

#### 12.5 Action定义

所谓Action，就是把数据从应用（视图、服务器等）传递到Store的有效载荷，是Store数据的唯一来源。在Redux中，Action是通过Store对象的dispatch方法传递到Store中的。

#### 12.6 Reducer设计

所谓Reducer，就是指如何将应用State（状态）的变化响应为Action，并发送到Store的逻辑模块。请记住，Action仅仅描述了事件发生的类型，并没有描述应用如何更新State（状态）。对于具体更新State（状态）的业务操作，是有Reducer负责处理完成的。

注意：

保持Reducer函数的纯净很重要，切记在Reducer里做一下这几类操作：

- 修改传入参数；
- 执行有副作用的操作，如API请求和路由跳转等。
- 调用非纯函数，如Date.now()、Math.random()这类不确定返回值的函数。

#### 12.7 计数器应用测试

