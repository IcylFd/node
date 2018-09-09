function Demo() {
    var x = 10;
    this.aa = 123;
    this.bb = function () {
        console.log(456);
    };
    this.cc = function () {
        console.log(x);
    }
}
//
// Demo.prototype.call = function () {
//     console.log('I am calling');
// }
//
var demo = new Demo();
//
// // Demo.prototype == demo.__proto__;
// demo.call();
// demo.bb();
// console.log(demo.x);
// demo.cc();


exports.mm = demo;   //通过exports向外公布一个对象

exports.nn = {
    'a':1,
    'bb':function () {
        console.log('bb');
    }
}
