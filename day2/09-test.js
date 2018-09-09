var http = require('http');
var url = require('url');
http.createServer(function (res, req) {
    var paramobj = url.parse(req.url);

    if('/favicon.ico' == pathname){
        return;
    }
}).listen(3000);



console.log()
