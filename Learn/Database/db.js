const mysql = require('mysql2/promise');

const poll = mysql.createPool({
  host : "localhost",
  user : "root",
  password : "Hema@08",
  database : "learn"
});

module.exports = poll;