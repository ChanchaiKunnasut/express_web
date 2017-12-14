var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
        "CF-RAY": "3cd014c7c90b17b6-SIN",
        "Sponsored-By": "https://www.runscope.com",
        "Strict-Transport-Security": "max-age=15552000",
        "Transfer-Encoding": "chunked",
        "Via": "1.1 vegur",
        "X-Content-Type-Options": "nosniff",
        "Connection": "keep-alive"
    });
    response.end("ok");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
