function Person () {
    this.eat = function () {
        console.log('eating');
    };
    this.say = function () {
        console.log('saying');
    }
}

//1
// module.exports = Person;

//2
exports.eat = function () {
    console.log('eating');
}
exports.say = function () {
    console.log('saying');
}

//3
module.exports = {
    'eat' : function () {
        console.log('eating');
    },
    'say' : function () {
        console.log('saying');
    }
}

//4


//一个对象，对象中包含一个数组元素
//1
// exports.arr=['laoshan','aaa'];
//2
module.exports = ['laoshan','aaa'];
