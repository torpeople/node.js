var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";
MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection('products').find().toArray(function(err, res) {
		    if (err) throw err;
		    console.log(res);
		    db.close();	  
	  });	  
});

MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  /*
	  var orders = [{ _id: 1, product_id: 154, status: 1 }];
	  db.createCollection("orders",function(err,res){
		  if(err)throw err;

		  db.collection("orders").insertMany(orders,function(err,res){
			  if(err)throw err;
			  console.log(res);
		  });
		  
	  });
	  */
	  db.collection('orders').aggregate([
		    { $lookup:
		       {
		         from: 'products',
		         localField: 'products_id',
		         foreignField: 'id',
		         as: 'orderdetails'
		       }
		     }
		    ], function(err, res) {
		    if (err) throw err;
		    console.log(res);
		    db.close();	  
	  });	  
});

MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	  db.collection('products').aggregate([
		    { $lookup:
		       {
		         from: 'orders',
		         localField: 'products_id',
		         foreignField: 'id',
		         as: 'products'
		       }
		     }
		    ], function(err, res) {
		    if (err) throw err;
		    console.log(res);
		    db.close();	  
	  });	  
});
