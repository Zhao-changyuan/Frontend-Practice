## 6.1 虚拟DOM

用JavaScript对象表示DOM树的模式就称之为虚拟DOM。

虚拟DOM可以将多次DOM操作整合成一次，提高了渲染效率。

## 6.2 Diff算法

React将传统Diff算法的复杂度从O(n^3)优化到了O(n)。

React的优化主要基于以下两个假设：

- 两个不同类型的元素会产生不同的树
- 对于统一层级的一组子元素，他们可以通过唯一ID进行区分。

### 6.2.1 Tree Diff简介

只对两棵树的同层次节点进行比较。

### 6.2.2 Component Diff简介

相同组件生成相似的DOM结构，不同组件生成不同的DOM结构。

### 6.2.3 Element Diff简介

在遍历渲染组件树时（如在JSX中对数组使用map），不要使用其序号作为key。

## 6.3 Fiber机制

相对于之前的栈协调器（Stack Reconciler），Fiber Reconciler是一种能够测地解决主线程长时间占用问题的机制。

Fiber协调器的基本思想是把整个差异比较、渲染和更新的过程拆分成小任务，拆分的粒度称为Fiber。

### 6.3.1 Fiber树

window.requestIdleCallback()是一个较新的浏览器API，用于在浏览器空闲时执行回调函数。

### 6.3.2 Reconciliation阶段

Fiber协调器的第一个阶段被称为Render阶段或Reconciliation阶段。该阶段的任务默认为低优先级，可以被更高优先级的任务中断或暂停。该阶段得到标记了副作用的Fiber节点树。副作用表示在下一个阶段需要完成的工作。

第一个阶段包含的生命周期函数有componentWillMount()、componentWillReceiveProps()、getDerivedStateFormProps()、shouldComponentUpdate()、componentWillUpdate()及render()。

第一阶段的任务随时可能被中断或重来，可控性不高，建议开发者尽量不要在这几个生命周期中做副作用操作。

### 6.3.3 Commit阶段

第二阶段，此阶段React会将上一阶段收集到的effectList依次提交给真实的DOM操作，触发页面展示的改变。

第二阶段包含的生命周期函数有getSnapshotBeforeUpdate()、componentDidMount()、componentDidUpdate()及componentWillUnmount()。

## 6.4 Immutable.js 库

### 6.4.1 浅拷贝

浅拷贝是将对象的第一层键值进行独立的复制。

### 6.4.2 深拷贝

递归

### 6.4.3 Immutable.js 简介

Immutable.js 是一个由Facebook开源的项目，目的就是为了解决JavaScript不可变数据（Immutable Data）的问题。

以下情况可能导致性能浪费：

1. Props或State的值发生改变，但改变后的值和原来的值是一样的。

React推出的PureComponent组件实现shouldComponentUpdate()方法并在其中对新旧state和props进行了浅比较。

## 6.5 Hook特性

Hook是一个特殊的函数，它可以让你“钩入”React的特性，即在函数组件中也可以使用State及其他的React特性，不必定义Class组件。

### 6.5.1 State Hook简介

State Hook函数组件可以实现对自身内部状态的管理。

首先从React中引入useState()，其中useState()的用法如下：

```javascript
const [state, setState] = useState(initialState);
```

useState()的返回结果是一个含有两个元素的数组，即当前State及更新State的函数。

另外，为了保证Hook正常使用，编写代码时需要遵循如下原则：

- 只能在函数最外层调用Hook，不要在循环、条件判断或者子函数中调用；
- 只能在React的函数组件中调用Hook。

### 6.5.2 Effect Hook简介

当React组件是Class组件时，可以在生命周期中进行一些副作用操作，如数据获取、设置订阅及手动更改组件中的DOM等。而Effect Hook就是让开发者可以在函数组件中进行同样操作的另一个Hook。

与State Hook类似，先从React 中导入useEffect()方法，接着将进行相关操作的函数作为useEffect()方法的参数。默认情况先，进行相关操作的函数在第一次渲染和每次更新之后都会执行。

在Class组件中，可以在组件将要销毁时，即在componentWillUnmount()生命周期中做相关操作，如取消订阅和情况定时器。在Effect Hook中，如果Effect返回一个函数，React将会在执行清除操作是调用它。

Effect Hook在某种程度上实现了生命周期的功能，为组件提供了方便而简约的副作用调用方式。为了更好理解，可以将useEffect()看做是以下3个生命周期的集合：

- componentDidMount()
- componentDidUpdate()
- componentWillUnmount()

### 6.5.3 自定义Hook

