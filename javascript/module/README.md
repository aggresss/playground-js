
# module

- ES6
- CommonJS
- UMD
- CMD
- AMD

---

```exports = module.exports = {};```

- exports 是 module.exports 的一个引用
- module.exports 初始值为一个空对象 {}，所以 exports 初始值也是 {}
- require 引用模块后，返回的是 module.exports 而不是 exports
- exports.xxx 相当于在导出对象上挂属性，该属性对调用模块直接可见
- exports = 相当于给 exports 对象重新赋值，调用模块不能访问 exports 对象及其属性
- 如果此模块是一个类，就应该直接赋值 module.exports，这样调用者就是一个类构造器，可以直接 new 实例。
