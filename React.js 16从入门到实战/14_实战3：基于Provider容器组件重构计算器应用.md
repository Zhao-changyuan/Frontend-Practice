#### 14.1 设计思想

```javascript
connect(mapStateToProps, mapDispatchToProps, mergeProps, options = {})
```

Provider祖江将Store对象包装在顶层容器中，这样就可以被其子组件继承使用了。