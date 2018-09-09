//exports方式把对象公布给外部
//只能采用这种引用赋值的方式
exports.answer = function () {
    console.log('');
}




//exports方式把对象公布给外部
//直接赋值与引用赋值
//对象直接赋值给exports，地址改变，不再指向module.exports
//require是与module.exports关联的
exports = {

}



/*
//module方式把对象公布给外部
module.exports = {
    'answer':function () {
        console.log('I am anwsering other questions.')
    }
}
*/

function Person() {
    this.think = function (function_think) {
        console.log('thinking~~~~');
        setTimeout(function () {
            //console.log('thinking~~~~');
            function_think();
        },5000)
    };
    this.answer = function () {
        console.log('I am anwsering other questions.');
    }
}


//本文件调用
/*
var person = new Person();
person.think(function () {
    console.log('thinking 5s');
});
person.answer();
*/

//05-test.js 调用

module.exports = Person;

//module.exports：把类、对象公布给外部

//exports:把对象公布给外部




module.exports = ['laoshan','laoxie','xiaofeng'];
