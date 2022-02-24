# MobX

- [https://mobx.js.org/](https://mobx.js.org/)

React 和 MobX 是一对强力组合。React 通过提供机制把应用状态转换为可渲染组件树并对其进行渲染。而 MobX 提供机制来存储和更新应用状态供 React 使用。

不使用 decorator 的方法

- [https://cn.mobx.js.org/best/decorators.html](https://cn.mobx.js.org/best/decorators.html)

核心概念

- Observable state @observable
- Computed values @computed
- Reactions
- Actions @action

注意: action.bound 不要和箭头函数一起使用；箭头函数已经是绑定过的并且不能重新绑定。

- `Derivations`: 一般它是指可以从 state 中直接计算的来的结果;
- `Reactions`: Reactions 和 Derivations 很像，主要的区别在于 reactions 并不产生数据结果，而是自动完成一些任务，一般是和 I/O 相关的。他们保证了 DOM 和 网络请求会自动适时地出发。

## 版本区别

4/5.x -> decorator
6.x -> function

## observer

`observer` 函数/装饰器可以用来将 **React 组件转变成响应式组件**。 它用 `mobx.autorun` 包装了组件的 `render` 函数以确保任何组件渲染中使用的数据变化时都可以强制刷新组件。`observer` 是由单独的 mobx-react 包提供的。
`observer` 只能用来修饰 React 组件。

## Provider/inject

通过 Provider 组件将子组件 store 串联，通过 inject 按需使用；

## observable

observable 修饰 store
observer 修饰 component

实现 容器组件和 UI 组件分离
