var util = require('util');
var http = require('http');

var server = http.createServer(
    function (request, response) {
        util.log("request: %s %s", request.method, request.url);
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World!!');
        response.end();
    }
).listen(8080);
util.log("Server started on port 8080");
