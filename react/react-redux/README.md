
## Reference

- https://www.cnblogs.com/bax-life/p/8440326.html
- https://www.jianshu.com/p/db0bee45b2da
- https://github.com/vaibhavmule/react-redux-helloworld
- https://www.jianshu.com/p/85e4757814cd

### 概念

- state 根据一些数据渲染 DOM，这些数据称为 state
- store 连接 actions 和 reducers
- state/store react 提供 state，redux 提供 store

- action 描述发生了什么
- reducer 根据 action 返回一个全新的 state

- container 容器组件，通过 connect 方法将 redux 和 component 关联起来
- component 展示组件，只关注展示层

react-redux 为了方便开发，提供了一个 Provider 组件，以及 connect 方法。

connect() 接收四个参数，它们分别是 mapStateToProps，mapDispatchToProps，mergeProps 和 options。

mapStateToProps(state, ownProps) : stateProps 这个函数允许我们将 store 中的数据作为 props 绑定到组件上。
mapDispatchToProps，它的功能是，将 action 作为 props 绑定到 MyComp上。

Redux 的核心是一个 store，这个 store 由 Redux 提供的 createStore(reducers[，initialState]) 方法生成。要想生成 store，reducers，同时也可以传入第二个可选参数初始化状态 initialState。

Redux 最核心的 API ---- createStore，通过 createStore 方法创建的 store 是一个对象，它本身又包含4个方法。
