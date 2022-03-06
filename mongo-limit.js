// Limit the Result
// To limit the result in MongoDB, we use the limit() method.
// The limit() method takes one parameter, a number defining how many documents to return.
// Consider you have a "customers" collection:


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //Return the first 3 customers:
  dbo.collection("customers").find().limit(3).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
