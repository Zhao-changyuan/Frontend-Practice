## 目标

- 能够说出什么是DOM
- 能够获取页面元素
- 能够给元素注册事件
- 能够操作DOM元素的属性
- 能够创建元素
- 能够操作DOM节点

## 1. DOM 简介

Document Object Model 文档对象模型

## 2. 获取元素

### 2.1 如何获取页面元素

### 2.2 根据id获取

getElementById()

`console.dir`可以显示一个对象的所有属性和方法。

### 2.3 根据标签名获取

getElementsByTagName('标签名')

返回的是一个伪数组。

### 2.4 通过HTML5新增的方法获取

getElementsByClassName

querySelector 返回指定选择器的第一个元素对象

querySelectorAll 返回指定选择器的所有元素对象

### 2.5 获取特殊元素（body, html）

document.body

document.documentElement: html元素

## 3. 事件基础

### 3.1 事件概述

触发---响应机制。

三要素：

- 事件源
- 事件类型
- 事件处理程序

### 3.3 执行事件步骤

1. 获取事件源
2. 注册事件（绑定事件）
3. 添加事件处理程序

## 4. 操作元素

### 4.1 改变元素内容

element.innerText 非标准，

element.innerHTML W3C标准，

### 4.2 常用元素的属性操作

1. innerText innerHTML
2. src、 href
3. id、 alt、 title

### 4.3 表单元素的属性操作

`type、value、checked、selected、disabled`

### 4.4 样式属性操作

我们可以通过JS修改元素的大小、颜色、位置等样式。

1. element.style 里面的属性采取驼峰命名法
2. element.className

Js修改style样式操作，产生的是行内样式，CSS权重比较高。

className会直接更改元素的类名，会覆盖原先的类名。

### 4.5 排他思想

### 4.6 自定义属性的操作

- element.属性 获取内置属性值（元素本身自带的属性）
- element.getAttribute('属性') 主要获得自定义的属性（标准）



- element.setAttribute()
- element.removeAttribute()



### 4.7 H5自定义属性

#### 1. 设置H5自定义属性

H5规定自定属性以`data-`开头作为属性名并且赋值。

#### 2. 获取H5自定义属性

element.dataset.index或element.dataset['index']获取自定义属性data-index的值。

如果自定义属性里面有多个`-`连接的单词，我们获取的时候采取驼峰命名法。

## 5. 节点操作

### 5.2 节点概述

一般为节点至少拥有nodeType 节点类型、nodeName 节点名称、nodeValue节点值三个属性。

- 元素节点 nodeType为1
- 属性节点 nodeType为2
- 文本节点 nodeType为3

### 5.3 节点层级

#### 1. 父级节点

.parentNode，最近的一个父节点，如果指定的节点没有父节点则返回null

#### 2. 子节点

下面三个属性都包含文本节点。

parentNode.childNodes(（标准），不常使用。

.firstChild 第一个子节点

.lastChild 最后一个子节点



下面两个IE9以上才支持：

.firstElementChild 第一个子元素节点，实际开发使用parentNode.children[0]

.lastElementChild 最后一个子元素节点，实际开发使用parentNode.children[parentNode.children.length - 1]

#### 3. 子元素节点

parentNode.children（非标准），在实际开发中经常使用

#### 4. 兄弟节点

node.nextSibling

返回当前元素的笑一个兄弟节点，找不到则返回null。同样，也是包含所有类型的节点（元素、文本、属性）

node.previousSibling

nextElementSibling

previousElementSibling

### 5.4 创建节点

`document.createElement('tagName')`

#### 1. 添加节点

`node.appendChild(childNode)`

`node.insertBefore(child, 指定元素)`