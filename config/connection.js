var mysql = require('mysql');

var connection = mysql.createConnection({
  host:'localhost',
  port: 3310,
  user:'root',
  password: 'Dltbw1478vn',
  database:'burgers_db'
}); 
 
module.exports = connection;