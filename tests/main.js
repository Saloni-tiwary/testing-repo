var http = require("http");
 
http.createServer(function (request, response) {
    
    // Content Type: text/plain
    const body = 'Hello World';
response
  .writeHead(200, { //writeHead:Sends a response header to the request.
    // The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers.
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  })
  .end(body);
 
 }).listen(8000);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8000/');