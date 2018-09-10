var fs = require('fs');
var url = require('url');


exports.goIndex = function (res,req) {
    var pathname = __dirname + url.parse('/07-test-index.html').pathname;
    var data = fs.readFileSync(pathname,"utf-8");
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(data);
}
