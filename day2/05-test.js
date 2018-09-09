/* 传类
var Person = require('./05-test');
var person = new Person();
person.think(function () {
    console.log('thinking 5 seconds');
})
person.answer();
*/

/* 传对象属性、方法
var person = require('./05-test');
person.think(function () {
    console.log('thinking 5 seconds');
});
person.answer();
*/

var arr = require('./05-test');
console.log(arr);
