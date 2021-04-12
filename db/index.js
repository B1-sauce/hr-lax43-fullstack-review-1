var mysql = require('mysql');

// Your database connection is already made for you, though you may need to modify the credentials
var connection = mysql.createConnection({
  user: 'root',
  password: 'password123',
  database: 'hrlax43students'
});

connection.connect(() => console.log('connected'));

module.exports = connection;