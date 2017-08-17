var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  //updateOne(db);
	  updateMany(db);
	});

MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection("customers").find().toArray(function(err,result){
		  if(err) throw err;
		  console.log(result);
	  });
	});

function updateOne(db){
	  var myquery = { address: "Valley 345" };
	  //var newvalues = { name: "Mickey", address: "Canyon 123" }; //update all fields
	  var newvalues = {$set:{address: "Canyon 123" }}; //update only specific fields
	  db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
	    if (err) throw err;
	    console.log("1 document updated");
	    db.close();
	  });
	
}

function updateMany(db){
	  var myquery = {name: /^K/ };
	  var newvalues = {$set:{name: "Lucy" }}; //update only specific fields
	  db.collection("customers").updateMany(myquery, newvalues, function(err, res) {
	    if (err) throw err;
	    console.log(res.result.nModified + " document updated");
	    db.close();
	  });
	
}

