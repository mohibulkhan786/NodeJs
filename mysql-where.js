var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_sql"
});

con.connect(function(err) {
  if (err) throw err;
  /*Select all nodeUsers with the address "noida":*/
  //con.query("SELECT * FROM nodeUsers WHERE address = 'noida'", function (err, result) {
    con.query("SELECT * FROM nodeUsers WHERE name LIKE 'a%'", function (err, result){
    if (err) throw err;
    console.log(result);
  });
});
