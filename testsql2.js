const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'secret',
  database: 'my_db'
});

function getUser(userId) {
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  connection.query(query, function (error, results, fields) {
    if (error) throw error;
    console.log(results);
  });
}