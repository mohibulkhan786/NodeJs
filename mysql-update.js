var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node_sql"
});

con.connect(function(err) {
  if (err) throw err;
  //Update the address field:
  var sql = "UPDATE nodeusers SET address = 'Delhi' WHERE address = 'noida'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
