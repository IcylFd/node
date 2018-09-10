var dns = require('dns');
var querystring = require('querystring');

exports.goDns = function(res,req){
    var oParam = querystring.parse(url.parse(req.url).query);
    console.log(oParam);
    // res.writeHead(200,{'Content-type':'text/html'});
    // res.end();
}
