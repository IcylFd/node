var http = require('http');
var url = require('url');
var fs = require('fs');
var dns = require('dns');
var querystring = require('querystring');
var router = require('./require');

http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    switch(pathname){
        case '/':
            goIndex(res);
            break;
        case '/parse':
            goDns(res);
            break;
        default:
            res.writeHead(404,{'Content-type':'text/palin'});
            res.end('no page find');
    }
}).listen(3000);

function goIndex(res) {
    var pathname = __dirname + url.parse('/07-test-index').pathname;
    var indexPage = fs.readFileSync()
}

console.log('server start');
