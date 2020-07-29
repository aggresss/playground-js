function Path(path: string) {
  return function (target: Function) {
      !target.prototype.$Meta && (target.prototype.$Meta = {})
      target.prototype.$Meta.baseUrl = path;
  };
}

@Path('/hello')
class HelloService {
  constructor() {}
}

console.log(HelloService.prototype.$Meta);// 输出：{ baseUrl: '/hello' }
let hello = new HelloService();
console.log(hello.$Meta) // 输出：{ baseUrl: '/hello' }
