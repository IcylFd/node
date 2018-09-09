/*
aa();

var aa = function(){
    console.log('123');
}

aa();

function aa() {      //预编译 先被加载到前面
    console.log('456');
}

aa();
*/


var start = new Date();
//node的setTimeout 与 chrome中的setTimeout不是同一个
//node中 process.nextTick() 不需要用require加载
setTimeout(function () {
    var end = new Date();
    console.log('Time elapsed :' ,(end - start), 'ms');
},500);

while(new Date - start < 1000) {}
