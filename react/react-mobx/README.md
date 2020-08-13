## MobX

React 和 MobX 是一对强力组合。React 通过提供机制把应用状态转换为可渲染组件树并对其进行渲染。而MobX提供机制来存储和更新应用状态供 React 使用。

核心概念
- Observable state @observable
- Computed values @computed
- Reactions
- Actions @action

注意: action.bound 不要和箭头函数一起使用；箭头函数已经是绑定过的并且不能重新绑定。

