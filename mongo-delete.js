// Delete Document
// To delete a record, or document as it is called in MongoDB, we use the deleteOne() method.
// The first parameter of the deleteOne() method is a query object defining which document to delete.
// Note: If the query finds more than one document, only the first occurrence is deleted.


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  /*Delete the first customers with the address "Mountain 21":*/
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});




// Delete Many
// To delete more than one document, use the deleteMany() method.
// The first parameter of the deleteMany() method is a query object defining which documents to delete.

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  /*Delete all customers where the address starts with an "O":*/
  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
});
