// 测网速

//加载http模块
var http = require('http');
var urls = ['www.qq.com','www.baidu.com','www.sohu.com'];

//异步 网络I/O触发
function fetchPage(url){
    var start = new Date();
    http.get({'host': url},function (res) {
        console.log('got response from ' + url);
        console.log('request took: ' + (new Date() - start)+'ms');
    })
}

for(var i = 0; i < urls.length; i++){
    fetchPage(urls[i]);
}




//加载dns模块
// var dns = require('dns');
// dns.resolve4('www.baidu.com',function (err,addresses) {
//     if(err){
//         console.log('err');
//     }else{
//         console.log(addresses);
//     }
// })
