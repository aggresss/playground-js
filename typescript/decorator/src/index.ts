function f() {
  console.log("f(): evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("f(): called");
  }
}

function g() {
  console.log("g(): evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("g(): called");
  }
}

class D {
  @f()
  @g()
  method() { }
}

let d = new D();
d.method();
