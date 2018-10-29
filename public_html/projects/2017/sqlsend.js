  var Complete = function(err, username, password, saltRounds){

var sqlData = ` INSERT INTO box (username,password,saltRounds) VALUES ('${username}','${password}','${saltRounds}' ) `




















  }
module.exports.complete = complete
