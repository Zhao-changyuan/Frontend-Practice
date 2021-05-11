- 中间件
- Store Enhancer

## 9.1 中间件

中间件的特点：

- 中间件是独立的函数。
- 中间件可以组合使用。
- 中间件有一个统一的接口。

### 9.1.1 中间件接口

### 9.1.2 使用中间件

实际中应用基本上都会需要其他Store Enhancer的辅助。

createStore最多可以接受三个参数，第一个参数是reducer，第二个参数如果是对象，就会被认为是创建Store时的初始状态。

### 9.1.3 Promise中间件

### 9.1.4 中间件开发原则

尽量让一个中间件只完成一个功能。

## 9.2 Redux Enhancer

### 9.2.1 增强器接口

实现一个Store Enhancer，功夫全在如何定制产生的store对象。

一个store对象包含下列接口：

- dispath
- subscribe
- getState
- replaceReducer

每一个接口都可以修改，当然，无论如何修改，最后往往还是要调用原有对象的函数。

### 9.2.2 增强器实例reset

