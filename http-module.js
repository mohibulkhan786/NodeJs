// ode.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
// To include the HTTP module, use the require() method:
// The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
// Use the createServer() method to create an HTTP server:

var http = require('http');
var dt = require('./returnDate');

// The function passed into the http.createServer() has a req argument that represents the request 
// from the client, as an object (http.IncomingMessage object).

http.createServer(function (req, res) {
  //The first argument of the res.writeHead() method is the status code, 200 means that all is OK, 
      //the second argument is an object containing the response headers.


  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);