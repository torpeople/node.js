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

  select4(con);
  
});

function select1(con){
	  var sql = "select * from customers";
	  con.query(sql, function(err, result, fields){
		  if(err) throw err;
		  console.log(result);
	  });
}

function select2(con){
	  var sql = "select name, address from customers";
	  con.query(sql, function(err, result, fields){
		  if(err) throw err;
		  console.log(result);
	  });
}

function select3(con){
	  var sql = "select name, address from customers";
	  con.query(sql, function(err, result, fields){
		  if(err) throw err;
		  console.log(fields);
	  });
}

function select4(con){
	var name = 'Amy';
	var adr = 'Montain 21';
	var sql = "select name, address from customers where name = ? or address = ?";
	con.query(sql, [name, adr], function(err, result, fields){
		if(err) throw err;
		console.log(result);
	});
}
