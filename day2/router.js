var MainIndex = require('main_index');
var ParseDNS = require('parse_dns');

exports.router = function (res,req,pathname) {
    switch(pathname){
        case '/':
            MainIndex.goIndex(res,req);
            break;
        case '/parse':
            ParseDNS.goDns(res,req);
            break;
        default:
            res.writeHead(404,{'Content-type':'plain'});
            res.end('not found');
    }
}
