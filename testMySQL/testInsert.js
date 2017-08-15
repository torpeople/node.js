var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testpy"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  insert3(con);
  
});

function insert1(con){
	  var sql = "INSERT INTO customers (name, address) VALUES ('Toropeople Inc', 'Toronto')";
	  con.query(sql, function(err, result){
		  if(err) throw err;
		  console.log("1 record inserted");
	  });
}

function insert2(con){
	  var sql = "INSERT INTO customers (name, address) VALUES ?";
	  var values = [
	    ['John', 'Highway 71'],
	    ['Peter', 'Lowstreet 4'],
	    ['Amy', 'Apple st 652'],
	    ['Hannah', 'Mountain 21'],
	    ['Michael', 'Valley 345'],
	    ['Sandy', 'Ocean blvd 2'],
	    ['Betty', 'Green Grass 1'],
	    ['Richard', 'Sky st 331'],
	    ['Susan', 'One way 98'],
	    ['Vicky', 'Yellow Garden 2'],
	    ['Ben', 'Park Lane 38'],
	    ['William', 'Central st 954'],
	    ['Chuck', 'Main Road 989'],
	    ['Viola', 'Sideway 1633']
	  ];
	  con.query(sql, [values], function (err, result) {
	    if (err) throw err;
	    console.log("Number of records inserted: " + result.affectedRows);
	  });
}

function insert3(con){
  var sql = "INSERT INTO customers (name, address) VALUES ('CCTown', 'Toronto')";
  con.query(sql, function(err, result){
	  if(err) throw err;
	  console.log("1 record inserted, ID: " + result.insertId);
  });
	
}
