// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "node_sql"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

var con = require('./mysql-config.js');

con.query("SELECT * FROM nodeusers", function (err, result, fields) {
  //con.query("SELECT name, address FROM nodeUsers", function (err, result, fields)
  //

  if (err) throw err;
  console.log(result);
});





