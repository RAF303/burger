var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "21batmaN",
        database: "burgers_db",
        insecureAuth: true
    });
}

connection.connect(function (err) {
    if (err) {
        console.log("error connection" + err.stack);
    }
    console.log("WE LIVE!!!!" + connection.threadId);
});

connection.connect();
module.exports = connection;