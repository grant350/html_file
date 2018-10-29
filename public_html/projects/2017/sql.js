

var mysql = require("mysql")

  var check = function(err, username, password, saltRounds){
console.log(err )

var sql = `SELECT username FROM userCode WHERE username = '${username}'  `
console.log(sql)

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
//end

db.connect();
//end of connect
db.query(sql, function(err,rows,result,fields){
if (err) {console.log(error.code)}
  console.log("mysql connected to Database shit, port 3306 Google sql server")
console.log(sql + " " + "Sent to the server")
console.log(rows)

db.end();
})

}
// end of function
//end of function


module.exports.check = check
