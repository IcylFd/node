var fs = require('fs');


var data = fs.readFileSync('file.txt','utf-8');   //同步
console.log(data);
console.log('end');


//异步函数要有回调
// fs.readFile('file.txt','utf-8',function (err,data) {    //异步
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
// console.log('end');

//ajax
/*
$.post('user/checkname',{'id':1},function(data){
    console.log(data);
},'text');
*/
