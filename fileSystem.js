// Common use for the File System module:

// Read files
// Create files
// Update files
// Delete files
// Rename files


// The Node.js file system module allows you to work with the file system on your computer.

// To include the File System module, use the require() method:

//The fs.readFile() method is used to read files on your computer.


var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('readfile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  }); 
}).listen(8080); 

// The File System module has methods for creating new files:
// fs.appendFile()
// fs.open()
// fs.writeFile()
// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:


fs.appendFile('createFile.txt', 'Hello content! \n', function (err) {
    if (err) throw err;
    console.log('createFile Saved!');
  });


//   The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", 
//   the specified file is opened for writing. If the file does not exist, an empty file is created:

  fs.open('writefile.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('writefile Saved!');
  });


//   The fs.writeFile() method replaces the specified file and content if it exists. 
//   If the file does not exist, a new file, containing the specified content, will be created:
fs.writeFile('writenewfile.txt', 'Hello Mr MK!', function (err) {
    if (err) throw err;
    console.log('write New Saved!');
  });


//   Update Files
// The File System module has methods for updating files:

// fs.appendFile()
// fs.writeFile()
// The fs.appendFile() method appends the specified content at the end of the specified file:

fs.appendFile('updateFile.txt', ' This is my Updaing text.', function (err) {
    if (err) throw err;
    console.log('file Updated!');
  });


  fs.writeFile('replacedFile.txt', 'This is my Replaced text', function (err) {
    if (err) throw err;
    console.log('File Replaced!');
  });


//   Delete Files
// To delete a file with the File System module,  use the fs.unlink() method.
// The fs.unlink() method deletes the specified file:

fs.unlink('deletefile.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });


//   Rename Files
// To rename a file with the File System module,  use the fs.rename() method.
// The fs.rename() method renames the specified file:

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
    if (err) throw err;
    console.log('File Renamed!');
  });