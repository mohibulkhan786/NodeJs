// var mysql = require('mysql');

// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "node_sql"
// });

// con.connect(function(err) {
//     if (err) throw err;
//     //Return the first 5 customers:
//     con.query("SELECT * FROM nodeusers LIMIT 2", function (err, result) {
//       if (err) throw err;
//       console.log(result);
//     });    
  
// });


var con = require('./mysql-config.js');

con.query("SELECT * FROM nodeusers LIMIT 2", function (err, result) {
         if (err) throw err;
         console.log(result);
      });   



  var sql = "SELECT * FROM nodeusers LIMIT 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });




  var sql = "SELECT * FROM nodeusers LIMIT 5 OFFSET 2";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });


  var sql = "SELECT * FROM nodeusers LIMIT 2, 5";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
