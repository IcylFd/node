var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    readDirName(__dirname+'/dir',req,res);
}).listen(3000);

//同步
/*
function readDirName(path,req,res) {
    var files = fs.readdirSync(path);
    files.forEach(function(item){
        var stats = fs.statSync(path+'/'+item);
        if(stats.isDirectory()) {
            readDirName(path+'/'+item,req,res);
            res.writeHead(200,{'Content-type':'text/html'});
            res.end('文件夹：'+item,'utf-8');
            console.log('文件夹：'+item);
        } else{
            res.writeHead(200,{'Content-type':'text/html'});
            res.end('文件：'+item,'utf-8');
            console.log('文件：'+item);
        }
    });
}
*/

//异步
function readDirName(path,req,res) {
    fs.readdir(path,function (err,files) {
        if(err){
            res.writeHead(404,{'Content-type':'text/plain'});
            res.end('not found');
        }else{
            files.forEach(function (item) {
                fs.stat(path+'/'+item,function (err,stats) {
                    if(err){
                        res.writeHead(404,{'Content-type':'text/plain'});
                        res.end('not found');
                    }else if(stats.isDirectory()){
                        readDirName(path+'/'+item,req,res);
                        res.writeHead(200,{'Content-type':'text/html'});
                        res.end('文件夹：'+item,'utf-8');
                        console.log('文件夹：'+item);
                    }else{
                        res.writeHead(200,{'Content-type':'text/html'});
                        res.end('文件：'+item,'utf-8');
                        console.log('文件：'+item);
                    }
                });
            } )
        }
    });

}


console.log('server start');
