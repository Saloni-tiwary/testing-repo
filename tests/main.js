var http = require("http");
//use the require directive to load Node.js modules.
http.createServer(function (request, response) {
    // Send the HTTP header 
    //creates the instance of the server
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    const body = 'Hello World';
response
  .writeHead(200, { //writeHead:Sends a response header to the request.
    // The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers.
    'Content-Length': Buffer.byteLength(body),
    'Content-Type': 'text/plain'
  })
  .end(body);
//     response.writeHead(200, {'Content-Type': 'text/plain'});
    
//     // Send the response body as "Hello World"
//     response.end('Hello World\n');
 }).listen(8000);
 
 // Console will print the message
 console.log('Server running at http://127.0.0.1:8000/');