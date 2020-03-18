interface GenericIdentityFn<T> {
    (arg: T): T;
}

function identity<T>(arg: T): T {
    return arg;
}

var myIdentity: GenericIdentityFn<number> = identity;

var num = myIdentity(10); // 正确，因为类型是number

var str = myIdentity("10") // 错误，参数类型不是number

