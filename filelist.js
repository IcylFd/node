var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    readDirName(__dirname,req,res);
}).listen(3000);

function readDirName(dirname,req,res) {
    fs.readdir(dirname,function (err,files) {
        if(err){
            res.writeHead(404,{'Content-type':'plain'});
            res.end('not found');
        }else{
            for(var i = 0; i < files.length; i++) {
                fs.stat(files[i],function (err,stats) {
                    if(err){
                        res.writeHead(404,{'Content-type':'plain'});
                        res.end('not found');
                    } else if(stats.isDirectory()) {
                        readDirName(files[i],req,res);
                        console.log(files[i]);
                    } else{
                        console.log(files[i]);
                    }
                })
            }

        }
    })
}


console.log('server start');
