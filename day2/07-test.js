var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
    //找到文件路径
    var readPath = __dirname+url.parse('/07-test-index.html').pathname;
    console.log(readPath);

    //把文件加载到内存 用同步
    var data = fs.readFileSync(readPath,'utf-8');

    //把数据打成数据包发回
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(data)
}).listen(3000);

console.log('server start');



/*
1. server读取文件到内存    处理路径？处理url
2. 把内存数据变成数据包
3. 发送数据包并结包
*/

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-type':'text/html'});
//     res.end('<h3>hello</h3>');
// }).listen(3000);
//
// console.log('server start');


//mime头 支持409种文件格式（除word）
//非可执行体 可在浏览器中显示

