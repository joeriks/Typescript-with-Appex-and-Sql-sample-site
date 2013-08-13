var sql = require('msnodesql');

var conn_str = "Driver={SQL Server Native Client 11.0};Server={(local)\\SQLEXPRESS};Database={sampledb};Trusted_Connection={Yes};";

	sql.open(conn_str, function( err, conn ) {

		console.log(err);

		
		
		conn.query( "SELECT * FROM dbo.name", function( err, results ) {
			console.log(results);
		});
		
		
		  
	});
