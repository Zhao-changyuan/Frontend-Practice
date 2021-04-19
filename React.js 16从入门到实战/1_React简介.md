## 1.1 React概述

Facebook Instagram

## 1.2 React优势

主要优点：

- 声明式设计：React采用声明范式，可以轻松描述应用。
- 高效：React通过对DOM的模拟，最大限度第减少了DOM的交互。
- 灵活：React可以与已知的库或框架很好地配合。
- 使用JSX语法：JSX是JavaScript语法的扩展，可以极大地提高JS运行效率。
- 组件复用：通过React构建组件是的代码易于复用，可在大型项目应用开发中发挥优势。
- 单项响应的数据流：React实现了单向响应的数据流，减少了重复代码，比传统数据绑定方式更简单。

## 1.3 第一个React应用

- react.js是React框架的核心库。
- react-dom.min.js提供与DOM相关的功能。

ReactDOM.render()方法的语法格式如下：

`ReactDOM.render(element, container[, callback]);`

- element参数：必需，表示渲染的源对象（对象或组件）。
- container参数：必需，表示渲染的目标对象（元素或组件）。
- callback参数：可选，用于定义回调方法。

## 1.4 React脚手架

### 1.4.1 关于React脚手架

比较流行的做法是采用Webpack + ES6模式来大家项目架构，然后通过打包方式发布Web应用。

设计出一个具有良好兼容性的React脚手架，通过自动化方法进行配置，并生成实际项目框架的方式逐渐称为主流。最著名的还是Facebook自己推出的“create-react-app”脚手架。

### 1.4.2 Node.js与npm

npm就是基于Node.js框架的包管理工具。而Node.js框架则是基于著名的Google V8引擎所开发的JavaScript服务端平台，可用来快速大家易于扩展的Web应用。

### 1.4.3 Webpack模块打包器

简单来讲，Webpack是一项模块打包器技术，通过分析项目结构找到JavaScript(ECMAScript)模块以及其他一些浏览器不能直接运行的扩展语言或资源，将其转换并打包为合适的格式以供浏览器解析。

Webpack的工作方式可以概括如下：首相将项目作为一个整体来看，通过一个给定的主文件或入口文件（如index.js），Webpack将从这个文件开始查找项目的所有依赖文件，并使用加载器（loaders）进行处理，最后打包为一个（或多个）可通过浏览器解析的JavaScript脚本文件。

### 1.4.4 ES6和Babel

Babel其实是一个工具链，主要用于将基于ECMAScript 2015+标准编写的脚本代码转换为向后兼容JavaScript语法的脚本代码，以便能够运行在当前或旧版本的浏览器中。

### 1.4.5 使用create-react-app脚手架开发第一个应用

### 1.4.6 React项目架构

## 1.5 React虚拟DOM

React DOM类似于一种将相关的实际DOM组合在一起的集合，是有区别于传统概念上的DOM元素的，如果将其理解为DOM主键应该更贴切。因此React矿建将React DOM称为DOM。

## 1.6 JSX简单入门

专属于React框架的JavaScript语法扩展——JSX。

JavaScript XML的缩写。

通过React JSX方式定义的虚拟DOM，最终也会转换为通过createElement()方法实现虚拟DOM。

## 1.7 React渲染机制

Diff算法的核心就是通过比较找到DOM Tree前后的差异。React渲染机制的基本原理就是：在DOM Tree的状态和属性发生改变后，构造出新的虚拟DOM Tree，然后通过Diff算法与原始的虚拟DOM Tree进行比较，计算出变化的节点并进行更新操作。该算法的优势就是减少了对DOM的频繁重复操作，从而提升页面的访问性能。