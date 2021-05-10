## 5.1 单个React组件的性能优化

### 5.1.1 发现浪费的渲染时间

### 5.1.2 性能优化的时机

### 5.1.3 React-Redux的shouldComponentUpdate实现

要想让react-redux认为前后的对象类型prop是相同的，就必须要保证prop是指向同一个JavaScript对象。

## 5.2 多个React组件的性能优化

### 5.2.1 React的调和（Reconciliation）过程

每个React组件类必须要重视shouldComponentUpdate

### 5.2.2 Key的用法

## 5.3 用reselect提高数据获取性能

reselect库的工作原理：只要相关状态没有改变，那就直接使用上一次的缓存结果。

反范式化数据结构的特点就是读取容易，修改比较麻烦。