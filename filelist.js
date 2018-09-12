var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    fs.readdir('dir',function (err,files) {
        if(err){
            res.writeHead(404,{'Content-type':'plain'});
            res.end('not found');
        }else{
            console.log(files);
            fs.stat('dir',function (err,stats) {
                if(err){
                    res.writeHead(404,{'Content-type':'plain'});
                    res.end('not found');
                }
                else if(stats.isDirectory()) {
                    
                }
            })
        }
    })
}).listen(3000);

console.log('server start');
