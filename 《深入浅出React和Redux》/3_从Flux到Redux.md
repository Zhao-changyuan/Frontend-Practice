## 3.1 Flux

单向数据流。

### 3.1.1 MVC框架的缺陷

实际的框架实现中，总是允许View和Model可以直接通信。

![](https://lark-assets-prod-aliyun.oss-cn-hangzhou.aliyuncs.com/yuque/0/2021/png/21377645/1620364999074-resources/19891056/png/49be8b94-3039-4325-91d9-970dc094689a.png?OSSAccessKeyId=LTAI4GGhPJmQ4HWCmhDAn4F5&Expires=1620366801&Signature=lcHNtJOtiZOpmPYoSw7h7fQCNkU%3D)

### 3.1.2 Flux应用

#### 1. Dispatcher

Dispatcher存在的作用，就是用来派发action。

#### 2. Action

action顾名思义代表一个“动作”，不过这个动作只是一个普通的JavaScript对象，代表一个动作的纯数据，类是与DOM API中的事件（event）。

作为管理，action对象必须有一个名为type的字段，代表这个action对象的类型。

定义action通常需要两个文件，一个定义action的类型，一个定义action的构造函数（也称为action creator）。分成两个文件的主要原因在Store中会根据action类型做不同操作，也有单独导入action类型的需要。

#### 3. Store

一个Store也是一个对象，这个对象存储引用状态，同时还要接受Dispatcher派发的动作，根据动作来决定是否要更新应用状态。

Dispatcher有一个函数叫做register，接受一个回调函数作为参数。返回值是一个token，这个token可以用于Store之间的同步。

虽然名为Store，但并不表示一个Store必须要存储什么东西，Store只是提供获取数据的方法，而Store提供的数据完全可以由另一个Store计算得来。

Dispatcher的waitFor可以接受一个数组作为参数，数组中每个元素都是一个Dispatcher.reigister函数的返回结果，也就是所谓的dispatchToken。这个waitFor函数告诉Dispatcher，当前的处理必须要暂停，知道dispatchToken代表的那些已注册回调函数执行结束才能继续。

当一个动作被派发的时候，Dispatcher就是简单地把所有注册的回调函数全都调用一遍，至于这个动作是不是对方关心的，Flux的Dispatcher不关心，要求每个回调函数去鉴别。

#### 4. View

### 3.1.3 Flux的优势

在Flux的理念里，如果要改变界面，必须改变Store中的状态，如果要改变Store中的状态，必须派发一个action对象，这就是规矩。在这个规矩之下，想要追溯一个应用的逻辑就变得非常容易。

MVC最大的问题就是呜啊禁绝View和Model之间的直接对话，对应于MVC中的View就是Flux中的View，对应于MVC中的Model的就是Flux中的Store。

### 3.1.4 Flux的不足

#### 1. Store之间的依赖关系



#### 2. 难以进行服务端渲染

#### 3. Store混杂了逻辑的状态

Store封装了数据和处理数据的逻辑，但是，当我们需要动态替换一个Store的逻辑时，只能把这个Store整体替换掉，那也就无法保持Store中存储的状态。

## 3.2 Redux

作为开发者，只有兼容并蓄，才能够站得高，看得远。

### 3.2.1 Redux的基本原则

- 唯一数据源
- 保持状态只读
- 数据改变只能通过纯函数完成

#### 1. 唯一数据源

应用的状态数据应该只存储在唯一的一个Store上。

#### 2. 保持状态只读

不能直接修改状态。

改变状态的方法不是去修改状态上值，而是创建一个新的状态对象返给Redux，有Redux完成新的状态的组装。

#### 3. 数据改变只能通过纯函数完成

这里说的纯函数就是Reducer。

`reducer(state, action)`

reducer函数要做的事情，就是根据state和action的值产生一个新的对象返回。

Redux的reducer只负责计算状态，并不负责存储状态。

**增加限制是提高软件质量的法门。**

### 3.2.2 Redux实例

和Flux一样，Redux应用习惯上把action类型和action构造函数分成两个文件定义。

在Redux中，很多函数都是这样不做什么产生副作用的动作，而是返回一个对象，把如何处理这个对象的工作交给调用者。

Redux中”分发“这个功能，从一个Dispatcher对象简化为Store对象上的一个函数dispatch，毕竟只有一个Store，要分发也是分发给这个Store。

Redux的Store状态设计一个主要原则：避免冗余的数据。

Redux中把存储state的工作抽取出来交给Redux框架本身，让reducer只用关系如何更新state，而不要管state怎么存。

在reducer中绝对不能去修改参数中state。

### 3.2.3 容器组件和傻瓜组件

容器组件：负责和Redux Store打交道

展示组件：只专心负责渲染界面的组件

拆分容器组件和傻瓜组件，是设计React组件的一种模式，和Redux没有直接关系。

### 3.2.4 组件Context

一个应用中，最好直接有一个地方需要直接导入Store，这个位置当然应该是调用最顶层的React组件的位置。

![](https://lark-assets-prod-aliyun.oss-cn-hangzhou.aliyuncs.com/yuque/0/2021/png/21377645/1620364999074-resources/19891056/png/49be8b94-3039-4325-91d9-970dc094689a.png?OSSAccessKeyId=LTAI4GGhPJmQ4HWCmhDAn4F5&Expires=1620378868&Signature=AtIglSoBix2Y2GHmuI4146AS94k%3D)

每个React组件的props中都有一个特殊属性children，代表的是子组件。

单纯来看React的这个Context功能的话，必须强调这个功能要谨慎使用。只有对那些每个组件都可能使用，但是中间组件又可能不使用的对象才有必要使用Context，千万不要滥用。

### 3.2.5 React-Redux

#### 1. connect

作为容器组件，要做的工作无外乎两件事：

- 把Store上的状态转化为内存傻瓜组件的prop；
- 把内层傻瓜组件中的用户动作转换为派送给Store的动作。

#### 2. Provider

react-redux要求store不光是一个object，而且必须包含三个函数的object：

- subscribe
- dispatch
- getState

