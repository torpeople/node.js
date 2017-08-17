var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //deleteOne(db);
  deleteMany(db);
});

MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  
	  db.collection("customers").find({}).toArray(function(err,result){
		  if(err){throw err;}
		  console.log("number of records:" + result.length);
		  console.log(result);
	  });
	});

function deleteOne(db){
	  var myquery = { address: 'Mountain 21' };
	  db.collection("customers").deleteOne(myquery, function(err, obj) {
	    if (err) throw err;
	    console.log("1 document deleted");
	    db.close();
	  });
}

function deleteMany(db){
	  var myquery = { address: /^O/ };
	  db.collection("customers").deleteMany(myquery, function(err, obj) {
	    if (err) throw err;
	    console.log(obj.result.n + " document(s) deleted");
	    db.close();
	  });
}