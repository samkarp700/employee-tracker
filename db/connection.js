const mysql = require('mysql2');

//connect to database
const db = mysql.createConnection(
    {
        host: 'localhost', 
        user: 'root', 
        password: '', 
        database: 'employee'
    }, 
    console.log('Connected to the Employee Database. ')
);

module.exports = db;