## 认识NPM

- npm （全称 Node Package Manager, 即node包管理器）
- 是Node.js默认的、以JavaScript编写的软件包管理系统
- npm 来分享和使用代码已经成了前端的标配



- dependencies: 运行时的依赖，发布后，即生产环境还需要的模块
- devDependencies：开发时的依赖，里面的模块是开发时用的，发布时用不到它，比如项目中使用的gulp，压缩css js的模块，这些模块在我们的项目部署后是不需要的。

## Package.json 属性说明

- name - 报名
- version 包的版本号
- description - 包的描述
- homeage - 包的官网 url
- author - 包的作者姓名
- contributors - 包的其他贡献者姓名
- dependecies - 依赖的包列表
- repository - 包代码存放的地方的类型。
- main - main字段指定了程序的主入口文件，`require('moduleName')`就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
- keyword - 关键字



**安装依赖时版本号说明**

- "5.0.3" 表示安装指定的5.0.3版本
- "~5.0.3" 表示安装5.0.X中最新的版本
- "^5.0.3" 表示安装5.X.X中最新的版本

## 包的使用

- CommonJS中中很大的一部分便是对模块系统的规范，使用require语句导入包

- 新的ES6可以使用import导入包



## Yarn是什么？

