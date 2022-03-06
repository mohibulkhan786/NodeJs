var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_sql"
});

con.connect(function(err) {
  if (err) throw err;
  //Sort the result by name
  con.query("SELECT * FROM nodeUsers ORDER BY name Desc", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
