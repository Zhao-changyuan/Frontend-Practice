## 2.1 JSX 简介

一种可以在JavaScript代码中书写HTML标签的语法糖。

JSX是JavaScript内定义的一套类XML语法，通过构建构建工具（如Webpack）可以解析生成JavaScript代码。

### 2.1.2 JSX语法

1. 定义组件时，最外层的标签只能有一个。当需要渲染精确的DOM结构时，可以使用React.Fragment包括组件元素，或使用简写形式`<>`
2. 所有的标签一定要闭合，即使在HTML中通常不闭合的标签，也应该协程自闭和的形式。

null是合法的JSX元素，但它不被渲染。和它类似的还有：tue、false、undefined。

JSX中区分原生DOM和React组件的标准是判断标签名称首字母是否为小写字母。

在JSX中，可以通过类似于HTML的写法在标签中为元素或组件添加属性。但其与HTML的内嵌属性有以下两点区别：

1. JSX中使用className代替HTML中的class属性。
2. JSX中通过对象的形式为变迁传递内联样式，如果样式的属性名称包含使用短横线隔开的多个单词，那么使用驼峰命名代替。样式的属性值通常情况下是数字或者字符串。

**事件绑定注意事项：**

- JSX事件的命名使用驼峰法，而HTML事件的命名用小写；
- JSX中的事件绑定传递的是一个回调函数，而HTML的事件绑定传递的是一个字符串。
- JSX不能通过return或false来阻止默认事件，而需要显示地调用preventDefault()或stopPropagation()等原生方法。

## 2.2 组件

### 2.2.1 组件的定义

- ES6 Class: 面向对象风格，但仍未改变JavaScript原型的本质；
- JavaScript Function: 定义组件最简单的方式，但默认无法进行状态管理。

JavaScript Function实现的这类主键被称为函数组件，也可以叫做无状态组件。

### 2.2.2 高阶组件

高阶函数是指这样一种函数：接收函数作为参数，或将函数作为输入返回。

高阶组件本质上也是一个函数，特殊的是它的接收值和返回值都是组件。

## 2.3 数据流

React作为状态驱动的前端框架，十分注重数据和状态的管理。

### 2.3.1 Props与State简介

#### 1. Props

组件在概念上类似于函数，所以可以将Props理解为组件的参数。组件接收这组参数，并返回用来描述页面内容的React元素。

需要注意的是，对于React组件来说，Props是只读的，也就是说不要尝试去修改Props。

#### 2. State

React把组件看成一个状态机（State Machines）：通过与用户交互，实现不同的状态，然后渲染UI，让用于界面和数据保持一致。每当组件的State更新时，React会根据新的State重新渲染用户界面，而不需要手动操作DOM。

关于State的更新，需要注意以下3点：

1. 不要直接修改State
2. 更新State可能是异步的
3. 调用setState()时，React会把提供的对象合并到当前的State中。这里的合并时浅合并，即只会更新修改的状态，其他状态保持不变。

### 2.3.2 组件通信简介

因为Props也可以传递函数，所以子组件想要向父组件传递状态，可以调用父组件经由Props传递过来的函数。

### 2.3.3 Context API简介

Context是React中的一个高级API，提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树逐层传递Props。从效果上看，Context是组件树项某棵子树的全局变量。

在大型的React应用中，使用Context仍然会遇到一些问题。

### 2.3.4 Redux简介

想要修改Cotext里的数据，只能通过修改Provider中的value的引用对象才能改变Context。

#### 2.什么是Redux

Redux是JavaScript状态容器。

Redux可以用3个基本原则来描述：

- 单一数据源：整个应用的State被存储在一棵对象树中，并且这个对象树只存在于唯一的store中；
- State是只读的：唯一改变 State的方法就是触发Action，Action是一个用于描述已发生事件的普通对象；
- 使用纯函数来执行修改：Reducer只是一些纯函数，它接收之前的State和Action，返回新的State并覆盖旧的的State。

**小知识：**

所谓存函数，是指如果函数的调用参数相同，则永远返回相同的结果。它不依赖于程序执行期间函数外部任何状态或数据的变化，必须只依赖于其输入参数。

### 2.3.5 MobX简介

MobX是一个经过大量项目广泛使用并验证的库，它通过函数响应式编程使得状态管理变得简单和可扩展。

MobX相比Redux而言数据流较为简单。

## 2.4 生命周期

### 2.4.1 挂载和卸载

组件的挂载时组件生命周期中经历的第一个阶段。在这个过程中主要会进行组件的初始化和首次渲染。

- componentWillMount()在组件渲染之前调用。
- componentDidMount()在组件第一次渲染之后调用，并且只调用一次。推荐在这个生命周期函数中进行组件状态的初始化和网络请求。
- componentWillUnmount()在组件卸载之前调用，组件的卸载只有这一个生命周期函数。该方法中主要进行一些处理操作，如清空定时器、取消网络请求或取消在componentDidMount()中创建的订阅等。

### 2.4.2 状态更新

状态更新是指组件接收到的属性发生改变，以及自身执行setState()方法时发生的一系列更新动作。

- componentWillReceiveProps()在已挂载组件接收到一个Props更新时被调用，接收更新后的Props为参数，它在组件初始化时不会被调用。
- shouldComponentUpdate()在组件的Props或State发生更新时调用，接收更新后的Props和State为参数，返回一个布尔值，默认为true。当返回false时，组件则不再继续执行之后的生命周期方法，即componentWillUpdate()、render()及componentDidUpdate()方法。
- componentWillUpate()在组件接收到新的Props或State时调用，更新后的Props和State为参数，它在渲染即render()之前被调用。
- componentDidUpdate()在组件完成更新后立即调用，首次渲染不会执行此方法。

**需要重点关注的是shouldComponentUpdate()方法，它允许开发者增加必要的条件判断，让组件在需要时更新，不需要时不更新。**

