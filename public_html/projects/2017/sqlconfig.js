
var mysql  = require('mysql');


var  database = function (){

const db = mysql.createConnection({
connectionLimit: "50",
host: "35.192.88.120",
  user: "jack",
  password: "Popcorn!1",
database: "shit",
pool: {
        max: 50,
        min: 0,
        idleTimeoutMillis: 30000
    }
});

}
module.exports.
