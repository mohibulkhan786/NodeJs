var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_sql"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE nodeUsers (id int NOT NULL AUTO_INCREMENT ,name VARCHAR(255), email varchar (33), address VARCHAR(255), age int , PRIMARY KEY(id))";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});