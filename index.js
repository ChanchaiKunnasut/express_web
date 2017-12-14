var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
        "CF-RAY": "3cd014c7c90b17b6-SIN"
    });
    response.end("ok");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
