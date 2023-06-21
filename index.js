const mysql = require('mysql2');
const inquirer = require('inquirer')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'your_mysql_username',
    password: 'your_mysql_password',
    database: 'employee_db',
  },
  
  console.log('You are connected to the employee_db database'),

  );

  connection.connect((err) => {
    if (err) throw err;
    console.log('You are not connected to the database.')});


