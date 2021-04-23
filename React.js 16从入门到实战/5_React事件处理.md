### 5.1 React事件介绍

- React事件绑定属性的命名采用驼峰式吸入法，而不是小写。
- 如果采用JSX语法，则需要传入一个函数作为事件处理函数，而不是一个字符串（DOM元素的写法）。

在React框架中必需显式的使用preventDefault()方法来阻止默认行为。

参数“e”是一个合成事件。React框架根据W3C规范来定义这些合成事件。

### 5.2 React单击事件

onClick={handleFuncName}

### 5.3 React阻止事件默认行为

### 5.4 React类的事件处理方法

在React框架中，如果使用ES6 Class语法来定义一个组件的时候，那么时间处理器会称为该类的一个方法。

在contructor中通过bind()方法为回调方法“this.handleClick”绑定了this关键字。

```javascript
// TODO: define ES6 Class Component
        class BtnClickComp extends React.Component {
            constructor(props) {
                super(props);
                this.handleClick = this.handleClick.bind(this);
            }
            handleClick() {
                console.log('React Event Class - Clicked OK!');
            }
            render() {
                return (
                    <button onClick={this.handleClick}>
                        Click Me!
                    </button>
                )
            }
        }
```

### 5.5 绑定回调方法的其他方式

绑定this关键字的重要性。

通过试验性的public class fields语法正确地绑定回调方法的方式。

通过箭头函数定义的，这会确保this关键字被绑定。另外，根据React官方文档的说明，该绑定方式是“试验性”的语法。

还可以在事件方法定义中，直接在回调方法中使用箭头函数的方式实现绑定this关键字。

**还是建议设计人员在构造器中绑定或使用Class Fields语法绑定这两种方式。**

### 5.6 在事件处理方法中传递参数

React可以通过两种方式在事件处理方法中传递参数，分别是**箭头函数方式**和通过**bind()方法**的绑定方式。

```
onClick={this.handleClick.bind(this, this.state.name)}
onClick={(e) => this.handleClick(this.state.name, e)}
```

注意要将合成事件参数对象（e）放在最后。

### 5.7 实战：开关按钮

### 5.8 React文本框事件

### 5.9 实战：水温监控控件

