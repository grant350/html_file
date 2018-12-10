
// provided software
var http = require("http"),
  fs = require("fs"),
  //username = "",
  //password = "",
  //saltRounds = "",

// express software
  express = require("express"),
  morgan = require('morgan'),
  bp = require("body-parser"),
  cookieParser = require("cookie-parser"),
// mysql software
  mysql = require("mysql"),
  connect = require("connect"),
// hashing software
bcrypt = require("bcrypt"),
  md5 = require('md5'),
 saltRoundsHashes = 12;

// Private modules
var sqlModule = require('./sql')
//expressApp = require(./modules/express.js)
//sqlModule.sql()


var app = express();
// create application/json parser
// create application/x-www-form-urlencoded parser

//app.use(bp.urlencoded({ extended: false}))
app.use(bp.json())

app.use(express.static("static"))
// end of requires
//start of static files excluding server.js
var uep = bp.urlencoded({extended: false})
var jsonParser = bp.json()
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/static/index.html")
});

app.post('/people',  jsonParser, function (req, res) {
  if (!req.body &&  req.body.data.length === 2) return res.sendStatus(400)
var body = req.body.data
var password= req.body.data[1]
var username = req.body.data[0]
var saltRounds = '324215'
//console.log(password + username + saltRounds)
//console.log(body);
sqlModule.onuse(username,password,saltRounds);

  res.send('welcome, ' + req.body)

})
app.get('/usersJoined',function (req, res) {

res.send("you do not have permisson to view this page")
})
// POST /api/users gets JSON bodies



/*

function hash(){

bcrypt.genSalt(saltRoundsHashes,function (err,salt){


bcrypt.hash(password, salt, function(err, hash) {
console.log(hash)
        // Store hash in your password DB.
    });
    bcrypt.hash(username, salt, function(err, hash) {
    console.log(hash)
            // Store hash in your password DB.
        });
})
}hash()
*/



app.listen(3000, function() {
  console.log("server started on 3000 server static files from node, connection waiting......")
})
