// Node.js can be used in database applications.
// One of the most popular databases is MySQL.
// MySQL Database
// To be able to experiment with the code examples, you should have MySQL installed on your computer.

// You can download a free MySQL database at https://www.mysql.com/downloads/.

// Install MySQL Driver
// Once you have MySQL up and running on your computer, you can access it by using Node.js.

// To access a MySQL database with Node.js, you need a MySQL driver. This tutorial will use the "mysql" module, downloaded from NPM.

// To download and install the "mysql" module, open the Command Terminal and execute the following:

// C:\Users\Your Name>npm install mysql


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_sql"
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});


module.exports = con;

// export default Con;

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });



// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
// });