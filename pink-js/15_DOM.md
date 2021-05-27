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