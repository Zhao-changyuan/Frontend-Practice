## 2.1 易于维护组件的设计要素

只有必要的时候才起拆分组件，不然可能得不偿失。

高内聚低耦合

## 2.2 React组件的数据

prop是组件的对外接口，state是组件的内部状态，对外用prop，内部用state。

### 2.2.1 React的prop

函数类型的prop等于让父组件交给了子组件一个回调函数，子组件在恰当的实际调用函数类型的prop，可以带上必要的参数，这样就可以反过来吧信息传递给外部世界。

如果在构造函数中没有调用super(props)，那么组件实例被构造之后，类实例的所有成员函数就无法通过this.props访问到父组件传递过来的props值。

ES6方法创造的React组件类并不自动给我们绑定this到当前实例对象。

通过增加类的propTypes属性来定义prop规格。

### 2.2.2 React的state

state代表组件的内部状态。

组件state必须是一个JavaScript对象。

### 2.2.3 prop和state的对比

- prop用于定义外部接口，state用于记录内部状态。
- prop的赋值在外部世界使用组件时，state的赋值在组件内部；
- 组件不应该改变prop的值，而state存在的目的就是让组件来改变的。

## 2.3 组件的生命周期

### 2.3.1 装载过程

在ES6语法下，类的每个成员函数在执行时的this并不是和类实例自动绑定的。

用ES6的话，在构造函数中通过给this.state赋值完成状态的初始化，通过给类属性（注意是类属性，而不是类的实例对象属性）defaultProps赋值指定props初始值，达到的效果是完全一样。

render函数应该是一个纯函数。

componentDidMount只能在浏览器端被调用。

### 2.3.2 更新过程

render和shouldComponentUpdate函数，也是React生命周期函数中唯二两个要求返回结果的函数。

正常情况下服务器端不会调用componentDidUpdate函数。

### 2.3.3 卸载过程

## 2.4 组件向外传递数据

## 2.5 React组件state和prop的局限