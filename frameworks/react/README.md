# React

- [https://reactjs.org/](https://reactjs.org/)
- [https://github.com/facebook/react](https://github.com/facebook/react)
- [https://create-react-app.dev/](https://create-react-app.dev/)
- [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)
- [https://react.docschina.org/](https://react.docschina.org/)

## Concept

React 认为渲染逻辑本质上与其他 UI 逻辑内在耦合

React 的核心在于它仅仅是考虑了如何将 DOM 节点更快更好更合适的渲染到浏览器中。它本身提供的涉及框架的理念并不多。

元素描述了你在屏幕上想看到的内容

当 React 元素为用户自定义组件时，它会将 JSX 所接收的属性（attributes）以及子组件（children）转换为单个对象传递给组件，这个对象被称之为 "props"。

## hooks

- [React Hooks 详解](https://www.jianshu.com/p/d600f749bb19)

React的组件创建方式，一种是类组件，一种是纯函数组件，并且 React 团队希望组件不要变成复杂的容器，最好只是数据流的管道。开发者根据需要组合管道即可。也就是说组件的最佳写法应该是函数，而不是类。
类组件和纯函数组件的区别很，纯函数组件有着类组件不具备的多种特点，例如：

- 纯函数组件没有状态
- 纯函数组件没有生命周期
- 纯函数组件没有this
- 只能是纯函数

也就是说函数组件，只能做 UI 展示的功能，涉及到状态的管理与切换，我们不得不用**类组件**或者**redux**，但类组件的也是有缺点的，比如遇到简单的页面代码会显得很重，并且每创建一个类组件，都要去继承一个React实例，至于 Redux，很久之前 Redux 的作者就说过，“能用 React 解决的问题就不用 Redux“ 。

为了解决**类组件功能齐全却很重，纯函数很轻但上文使用受到限制**的问题，React团队设计了 React Hooks。

常用 Hooks 包括：

- useState // state
- useContext // shared state
- useReducer // action
- useEffect // async callback
