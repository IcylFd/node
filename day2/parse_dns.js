var dns = require('dns');
var querystring = require('querystring');
var url = require('url');

exports.goDns = function(res,req){
    // console.log(req);
    // var oParam = querystring.parse(url.parse(req.url).query);
    // console.log(oParam);
    dns.resolve4('www.qq.com',function (err,addresses) {
        if(err){
            res.writeHead(404,{'Content-type':'text/plain'});
            res.end("not found");
        }else{
            res.writeHead(200,{'Content-type':'text/html'});
            res.end(querystring.stringify(addresses));
        }
    })

}
