//var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  //findOne(db);
  //findAll(db);
  //findSome(db);
  //query1(db);
  //query2(db);
  //sort1(db);
  limit(db);
});

function findOne(db){
  db.collection("customers").findOne({}, function(err, result) {
	    if (err) throw err;
	    console.log(result.name);
	    db.close();
	  });
}

function findAll(db){
	  db.collection("customers").find({}).toArray(function(err, result) {
		    if (err) throw err;
		    console.log(result);
		    db.close();
		  });	
}

function findSome(db){
	  db.collection("customers").find({},{_id: false}).toArray(function(err, result) {
		    if (err) throw err;
		    console.log(result);
		    console.log(result[4].address);
		    db.close();
		  });	
}

function query1(db){
	var query = {name: "Peter"};
	db.collection("customers").find(query).toArray(function(err,result){
		if(err) throw err;
		console.log(result);
		db.close();
	});
}

function query2(db){
	var query = {address: /^S/}; //address starts with "S"
	db.collection("customers").find(query).toArray(function(err,result){
		if(err) throw err;
		console.log(result);
		db.close();
	});
}

function sort1(db){
	var mySort = {name:-1};//1: asc, -1: desc
	  db.collection("customers").find().sort(mySort).toArray(function(err, result) {
		    if (err) throw err;
		    console.log(result);
		    db.close();
		  });	
}

function limit(db){
	db.collection("customers").find().limit(5).toArray(function(err, result){
		if (err) throw err;
		console.log(result);
		db.close();
	});
}