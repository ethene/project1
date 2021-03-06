var http = require('http');
var url = require('url');
var log = require('./log')(module);

var server = new http.Server();

server.listen(3000, '127.0.0.1');

var emit=server.emit;

server.emit = function (event)
{
    log.info(event);
    emit.apply(server, arguments);
};


server.on('request', function(req, res){

   urlParsed = url.parse(req.url, true);
   log.debug(req.headers);

   if (urlParsed.pathname == '/echo' && urlParsed.query.message)
   {
       res.end(urlParsed.query.message);
   }
                                        else
   {
       res.statusCode = 404;
       res.end('Not Found');
   }
});