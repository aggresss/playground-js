# new

通过 `new 函数名` 来实例化对象的函数叫构造函数。任何的函数都可以作为构造函数存在。

综合构造和原型模式：把私有属性和方法放在构造函数中，把共有属性和方法放在原型中，这样，私有属性和方法的修改，只会影响操作对象的本身，不会对其他实例造成影响。

IIFE 的出现是为了弥补 JavaScript 在 scope 方面的缺陷：JavaScript 只有全局作用域（global scope）、函数作用域（function scope），从 ES6 开始才有块级作用域（block scope）

class 是构造函数的语法糖，即 class 的本质是构造函数。class 的继承 extends 本质为构造函数的原型链的继承。

通过 class 定义的类和通过构造函数定义的类二者本质相同。并且在 JavaScript 执行时，会将第一种转会为第二种执行。所以 ES6 class 的写法实质就是构造函数。
