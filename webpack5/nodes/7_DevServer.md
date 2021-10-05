devServer给我们提供了开发过程中的服务器，是一个使用了express的http服务器，它的作用主要是为了监听资源文件的改变，该http服务器和client使用了websocket通信协议，只要资源文件发生改变，webpack-dev-server就会实时进行编译。

发布web服务，提高开发效率

- 使用命令
  - webpack 4: webpack-dev-server
  - webpack 5: webpack serve



- 热更新
  - webpack4 : `hot: true`
  - webpack 5: 
    - `liveReload: true`（同时禁用 hot）
    - `hot: false`
    - `target: "web"`（热更新只适用于 web 相关的 targets）
- proxy （配置接口代理）
- 

