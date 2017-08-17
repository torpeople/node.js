var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //drop1(db);
  drop2(db);
});


function drop1(db){
	  db.collection("customers").drop(function(err, delOK) {
		    if (err) throw err;
		    if (delOK) console.log("Collection deleted");
		    db.close();
		  });
}

function drop2(db){
	  db.createCollection("customers", function(err,res){
		  if (err) throw err;
		  console.log("Collection created!");
		  
	  });
	  
	  db.dropCollection("customers", function(err, delOK) {
		    if (err) throw err;
		    if (delOK) console.log("Collection deleted");
		    db.close();
		  });	
}