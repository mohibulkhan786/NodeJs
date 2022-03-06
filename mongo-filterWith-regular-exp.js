// Filter With Regular Expressions
// You can write regular expressions to find exactly what you are searching for.
// Regular expressions can only be used to query strings.
// To find only the documents where the "address" field starts with the letter "S", use the regular expression /^S/:


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  /*Return only the documents where the address starts with an "S":*/
  var query = { address: /^S/ };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
