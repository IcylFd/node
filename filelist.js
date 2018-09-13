var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    readDirName('dir-1',req,res);
}).listen(3000);

function readDirName(dirname,req,res) {
    fs.readdirSync(dirname,


        function (err,files) {
        console.log(dirname);
        if(err){
            res.writeHead(404,{'Content-type':'plain'});
            res.end('not found 1');
        }else{
            console.log(files);
            for(var i = 0; i < files.length; i++) {
                var stats = fs.statSync(__dirname+'/'+dirname+'/'+files[i]);
                if(stats.isDirectory()) {
                    readDirName(files[i],req,res);
                    console.log(files[i]);
                } else{
                    console.log(files[i]);
                }
            }

        }
    })
}


console.log('server start');
