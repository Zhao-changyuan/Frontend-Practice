## webpack是什么？

webpack是一个模块打包器（构建工具），它的主要目标是将JavaScript文件打包在一起，打包后的文件用于在浏览器中使用，但它也能够胜任转换（transform）、打包（bundle）或包裹（package）任何资源（resource or asset）。

## 原理和概念

- 树构建：在一个入口文件中引入所有资源，形成所有依赖关系树状图
- 模块：模块就是模块可以是ES6模块，也可以是commonJS或者AMD模块，对于webpack来说，所有的资源（css，img... ...）
- chunk：打包过程中被操作的模块文件叫做chunk，例如异步加载一个模块就是一个chunk
- bundle：bundle是最后打包后的文件，最终文件可以和chunk长得一模一样，但是大部分情况它是多个chunk的集合
- 为了优化最后生产出的bundle数量可能不等于chunk的属性，因为有可能多个chunk被组合到一个bundle中。

## 5个核心概念

1. entry

   - 入口（entry）指示webpack以哪个文件作为入口起点开始打包，分析构建内部依赖图。

2. output

   - 输入（output）指示webpack打包后的资源 bundles 输出到哪里，以及如何命名。

3. loader

   - loader让webpack能够去处理那些非javascirpt资源如css img等，将它们处理成webpack能够识别的资源，可以理解成一个翻译过程（webpack自身只能理解js和json）

4. plugins

   - 插件（plugins）可用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。

5. mode

   - 模式（mode）指示webpack使用相应模式的配置。
     - 开发模式（development）：配置比较简单，能让代码本地调试运行的环境。
     - 生产模式（production）：打码需要不断优化达到性能最好。能让代码优化上线运行的环境。
   - 都会自动启用一些插件，生产模式使用插件更多。

   

