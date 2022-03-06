// Find One
// To select data from a collection in MongoDB, we can use the findOne() method.
// The findOne() method returns the first occurrence in the selection.
// The first parameter of the findOne() method is a query object. In this example we use
//  an empty query object, which selects all documents in a collection (but returns only the first document).



var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //Find the first document in the customers collection:
  dbo.collection("customers").findOne({}, function(err, result) {
  //dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});





// Find All
// To select data from a table in MongoDB, we can also use the find() method.
// The find() method returns all occurrences in the selection.
// The first parameter of the find() method is a query object. In this example we use an empty query
//  object, which selects all documents in the collection.

// dbo.collection("customers").find({}).toArray(function(err, result) {
// dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
// dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {  
// dbo.collection("customers").find(query).toArray(function(err, result) {
// dbo.collection("customers").find(query).toArray(function(err, result) {
// dbo.collection("customers").find().sort(sort).toArray(function(err, result) {
// dbo.collection("customers").find().sort(mysort).toArray(function(err, result) {

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});



// Find Some
// The second parameter of the find() method is the projection object that describes which fields to include in the result.
// This parameter is optional, and if omitted, all fields will be included in the result.



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  //Exclude the _id field from the result:
  dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
