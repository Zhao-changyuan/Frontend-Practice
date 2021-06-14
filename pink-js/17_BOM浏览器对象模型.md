## 目标

- 能够说出什么是BOM
- 能够知道浏览器的顶级对象window
- 能够写出页面加载事件以及注意事项
- 能够写出两种定时器函数并说出区别
- 能够说出JS执行机制
- 能够使用location对象完成页面之间的跳转
- 能够知晓navigator对象涉及的属性
- 能够使用history提供的方法实现页面刷新

## 1. BOM 概述

### 1.1 什么是BOM

浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是window。

BOM由一系列相关的对象构成，并且每个对象都提供了很多方法与属性。

### 1.2 BOM 的构成

window对象是浏览器的顶级对象，它具有双重角色。

1. 它是JS访问浏览器窗口的一个接口。
2. 它是一个全局对象，定义在全局作用域中的变量、函数都会变成window对象的属性和方法。在调用的时候可以省略window。

## 2. window 对象的常见事件

### 2.1 窗口加载事件

onload

window.onload是窗口（页面）加载事件，当文档内容完全加载完成会触发该事件（包括图像、脚本文件、CSS等），就调用的处理函数。

`document.addEventListener('DOMContentLoaded' e=> {})`

DOMContentLoaded事件触发时，仅当DOM加载完成，不包括样式表，图片，flash等等，ie9以上才支持。

### 2.2 调整窗口大小事件

`onsize`事件

1. 只要窗口大小发生像素变化，就会触发这个事件；
2. 我们经常利用这个事件完成响应式布局。window.innerWidth 当前屏幕的宽度。

## 3. 定时器

### 3.1 setTimeout()定时器

### 3.3 停止 setTimeout()定时器

window.clearTimeout(timeoutID)

### 3.4 setInterval() 定时器

