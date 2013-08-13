/// <reference path="node_modules/appex/appex.d.ts" />

export module products{

    var sql = require('msnodesql');
    var conn_str = "Driver={SQL Server Native Client 11.0};Server={(local)\\SQLEXPRESS};Database={sampledb};Trusted_Connection={Yes};";

    export function index(context:appex.web.IContext){

        sql.open(conn_str, function( err, conn ) {
            conn.query( "SELECT * FROM dbo.name", function( err, results ) {

                var text = context.template.render('./views/products/index.txt', { model: results });
                context.response.headers['Content-Type'] = 'text/html';
                context.response.send(text);

            });
        });

    }

    export function wildcard(context:appex.web.IContext, id:number){

        sql.open(conn_str, function( err, conn ) {
            conn.query( "SELECT * FROM dbo.name WHERE id=" + id, function( err, results ) {
                var text = context.template.render('./views/products/item.txt', { model: results[0] });
                context.response.headers['Content-Type'] = 'text/html';
                context.response.send(text);
            });
        });

    }
}