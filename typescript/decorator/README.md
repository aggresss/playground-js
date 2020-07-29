## decorator

https://www.cnblogs.com/winfred/p/8216650.html

```
{
    "compilerOptions": {
        "experimentalDecorators": true
    }
}
```

### TypeScript装饰器（decorators）
装饰器是一种特殊类型的声明，它能够被附加到类声明，方法， 访问符，属性或参数上，可以修改类的行为。 装饰器使用 @expression这种形式，expression求值后必须为一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。

装饰器本身其实就是一个函数，理论上忽略参数的话，任何函数都可以当做装饰器使用。

装饰器种类
1. 类装饰器
2. 方法装饰器
3. 方法参数装饰器
4. 属性装饰器
