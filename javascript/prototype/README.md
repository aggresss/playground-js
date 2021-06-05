# prototype

构造函数和原型对象和实例对象之间的关系
1. 构造函数可以实例化对象
2. 构造函数中有一个属性叫prototype,是构造函数的原型对象
3. 构造函数的原型对象(prototype)中有一个constructor 构造器，这个构造器指向的就是自己所在的原型对象所在的构造函数
4. 实例对象的原型对象 __proto__ 指向的是该构造函数的原型对象(prototype)
5. 构造函数的原型对象(prototype)中的方法是可以被实例对象直接访问

---

## prototype

- https://blog.csdn.net/spirit_breeze/article/details/80953112

在定义一个函数（代码如下所示）时，

```
functionF() {
  // some code
}
```
JavaScript 内部会执行如下几个动作：
1. 为该函数添加一个原形（即 prototype）属性
2. 为 prototype 对象额外添加一个 constructor 属性，并且该属性保存指向函数F 的一个引用

一个子类对象可以获得其父类的所有属性和方法，称之为继承。

---

https://blog.csdn.net/weixin_42989966/article/details/103524596

组合继承
通俗来讲就是用原型链实现对**原型属性和方法**的继承，用借用构造函数继承来实现对**实例属性**的继承。
组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，成为 JavaScript 中最常用的继承模式。而且，instanceof 和 isPrototypeOf()也能够用于识别基于组合继承创建的对象。

- https://www.jb51.net/article/80109.htm

```
在 JavaScript 中，每个函数 都有一个 prototype 属性
在 JavaScript 中，每个对象中都包含了一个 [[Prototype]] 内部属性，这个属性所对应的就是该对象的原型。
[[Prototype]] 作为对象的内部属性，是不能被直接访问的。所以为了方便查看一个对象的原型，Firefox 和 Chrome 中提供了 __proto__ 这个非标准（不是所有浏览器都支持）的访问器

Function 对象作为一个函数，就会有 prototype 属性，该属性将对应 `function () {} `对象。
Function 对象作为一个对象，就有 __proto__ 属性，该属性对应 Function.prototype ，也就是说，`Function._proto_ === Function.prototype` 。
```
