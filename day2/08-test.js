var http = require('http');
var url = require('url');
var fs = require('fs');
var dns = require('dns');
var querystring = require('querystring');
var router = require('./router');


//将路由写在一个文件中
/*
http.createServer(function(req, res){
    var pathname = url.parse(req.url).pathname;
    switch(pathname){
        case '/':
            goIndex(res);
            break;
        case '/parse':
            goDns(req,res);
            break;
        default:
            res.writeHead(404,{'Content-type':'text/palin'});
            res.end('no page find');
    }
}).listen(3000);

function goIndex(res,req) {
    var pathname = __dirname + url.parse('/07-test-index.html').pathname;
    var indexPage = fs.readFileSync(pathname,'utf-8');
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(indexPage);
}

function goDns(req,res) {
    var oParam = querystring.parse(url.parse(req.url).query);
    dns.resolve4(oParam.search_dns,function (err,addresses) {
        if(err){
            res.writeHead(404,{'Content-type':'text/plain'});
            res.end('not found');
        }else{
            res.writeHead(200,{'Content-type':'text/html'});
            res.end(querystring.stringify(addresses));

        }
    })
}

console.log('server start');
*/


//拆分
http.createServer(function (res,req) {
    var pathname = url.parse(req.url).pathname;
    router.router(res,req,pathname);
}).listen(3000);

console.log('server start');
