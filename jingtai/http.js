var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    //网页的路径
    var pathname = url.parse(req.url).pathname;
    //所有静态资源的路径
    var realPath = __dirname + '/static' + pathname;
    //防止ico单独向服务器请求资源
    if(pathname == 'favicon.ico'){
        return;
    }else if(pathname == '/' || pathname == "/index"){
        goIndex(res);
    }else{
        dealWithStatic();
    }
})
