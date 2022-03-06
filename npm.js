// What is NPM?
// NPM is a package manager for Node.js packages, or modules if you like.
// www.npmjs.com hosts thousands of free packages to download and use.
// The NPM program is installed on your computer when you install Node.js
// NPM is already ready to run on your computer!
// What is a Package?
// A package in Node.js contains all the files you need for a module.
// Modules are JavaScript libraries you can include in your project.

var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);