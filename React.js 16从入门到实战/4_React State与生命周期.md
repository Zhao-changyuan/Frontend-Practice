React将组件看成一个状态机（State Machines），通过其内部定义的状态（State）与生命周期（Lifecycle）实现并与用户的交互，维持组件不同的状态。

## 4.1 React State介绍

通过状态（State）来实现React组件的状态机特性。

React框架之所以定义这个状态（State）概念，其目的就是仅仅通过更新React组件的状态（State），就可以实现重新渲染用户界面的操作（这样就不需要操作DOM了）。

React状态（State）的初始化工作需要放在React组件类的constructor()构造方法中。

## 4.2 关于定时器时钟的思考

结构清晰、可封装和可重复使用的时钟组件。

## 4.3 开始封装时钟UI

## 4.4 实现时钟UI的自动更新

## 4.5 自我更新的时钟UI类

## 4.6 在时钟组件中引入State状态

## 4.7 React生命周期介绍

React框架为组件设计了一个“声明周期”的概念，用于配合React状态（State）实现组件的渲染操作。

在React组件中，生命周期可基本分成三个状态，具体如下：

- Mounting：已开始挂载真实的组件DOM.
- Updating: 正在重新渲染组件DOM
- Unmounting: 已卸载真实的组件DOM.

生命周期方法：

- componentWillMount()方法：在渲染前调用，可以在客户端，也可以在服务端。
- componentDidMount()方法：在第一次渲染后调用，只作用于客户端。
- componentWillUpdate()方法：在组件接收到新的Props参数或者State状态、但还没有渲染时被调用。另外，该方法在初始化时不会被调用。
- componentDidUpdate()方法：在组件完成更新后会立即调用。另外，该方法在初始化时不会被调用。
- componentWillUnmount()方法：在组件从DOM中被移除之前会立即被调用。

## 4.8 在时钟组件中使用生命周期

## 4.9 正确的使用State状态

具体就是通过setState()方法来更新状态（State）。

在React框架中是不允许直接操作状态（State）属性的，而且直接操作是无效的。

setState()方法可以传入一个方法：

```js
setState((prevState, props) => {
	return updateStateObject;
})
```

## 4.10 自顶向下的数据流

在React框架中，状态（State）除了定义它的自身组件，其他的组件均是不可访问它的。

在React框架中，可以将组件所定义的状态（State）作为Props参数向下传递到其子组件中，但是子组件却无法知道该参数是来自父组件的状态（State）、参数（Props）或者人工输入的。

对于React状态（State）而言，其仅仅属于自身的组件，而且该状态（State）所派生的任何数据或UI只能影响其所派生的组件。