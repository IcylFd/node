//异步函数 结果集给它的回调函数的参数
//异步函数嵌套异步函数，业务逻辑多 -> 回调深渊
//解决回调深渊：as

//读取file.txt 然后停2s再结束
var fs = require('fs');
fs.readFile('../file.txt','utf-8',function (err,data) {
    if(err){
        console.log(err);
    }else{
        setTimeout(function(data){
            console.log(data);    //undefined
        },2000)
    }

})

//同步函数
function getData(data) {
    setTimeout(function () {
        console.log(data);  //data内容
    },2000)
}
