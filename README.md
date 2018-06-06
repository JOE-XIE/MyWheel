// 正常逻辑
// p.then(f1).then(f2).then(f3)
// 1.开始就将执行流程注册好
// p(p1)是一个promise对象，p.then(f1)返回了一个promise(p2),返回的这个promise(p2).then(f2)又返回一个promise(p3)，返回的这个promise(p3).then(f3)返回一个promise(p4)，结束。
// 2.过了一段时间，p1这个promise对象resolve了，p1的状态fulfilled，于是它onFulfilledCallbacks里的回调方法开始执行，
// 但是注意此时回调方法并不是单纯的f2，而是将f2包装后的一个函数。
// (value) => {
//     try {
//         let x = onFulfilled(value);
//         resolvePromise(bridgePromise, x, resolve, reject);
// 这里的resolve, reject是p2的resolve, reject方法
//     } catch (e) {
//         reject(e);
//     }
// }
// 这个函数先去执行f2，然后拿到f2返回值用resolvePromise去解析，如果f2的返回值是一个promise，就继续解析，直到返回的是一个非promise的值为止，调用reslove，
// 并将这个值作为参数传入resolve中，至此p2变为fulfilled状态，执行p2的onFulfilledCallbacks里的回调方法,也就是被包装过的f2方法。