const mysql = require('mysql2');
const inquirer = require('inquirer')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'employee_db',
  });

  connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database.')});