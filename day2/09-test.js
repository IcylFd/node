var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (res, req) {
    var pathname = __dirname + url.parse('/login.html').pathname;
    var data = fs.readFileSync(pathname,'utf-8');
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(data);
    // var paramobj = url.parse(req.url).pathname;
    // console.log(paramobj);
    // if('/favicon.ico' == pathname){
    //     return;
    // }
}).listen(3000);



console.log("start server");
