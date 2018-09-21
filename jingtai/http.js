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
        dealWithStatic(pathname, realPath, res);
    }
}).listen(3000);

function goIndex(res) {
    var readPath = __dirname + "/" + url.parse('index.html').pathname;
    var indexPage = fs.readFile(readPath);
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(indexPage);
}

function dealWithStatic(pathname, realPath,res){
    fs.exists(realPath,function (exists) {
        if(!exists){
            res.writeHead(404,{"Content-type":"text/plain"});
            res.write("the requset url "+pathname+"is wrong");
            res.end();
        }else{
            var pointPosition = pathname.lastIndexOf(realPath);
            var mmieString = pathname.substring(pointPosition);
            var mmieType;
            switch(mmieString){
                case 'css':
                    mmieType = "text/css";
                    break;
                case 'jpg':
                    mmieType = "text/jpeg";
                    break;
                default:
                    mmieType = "text/plain";
                    break;
            }
        }
        fs.readFile(realPath,"binary",function (err,file) {
            if(err){
                res.writeHead(500,{"Content-type":"text/plain"});
                res.end(err);
            }else{
                res.writeHead(200,{"Content-type":mmieType});
                res.write(file,"binary");
                res.end();
            }
        })
    })
}

console.log("server start");
