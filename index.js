const mysql = require('mysql2');
const inquirer = require('inquirer')
const fs = require('fs');

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


    
    const db = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_info'
    },
        console.log('Connected to the employees database')
    );
   
   
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to do?",
            name: "primary options",
            choices: ["Views all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee's role"]
        },
        {
            type: "list",
            message: "Choose the Department you would like to view",
            name: "department options",
            choices: ["Sales", "Engineering", "Finance", "Legal"]
        },
        {
            type: "list",
            message: "Choose the Role you would like to view",
            name: "role options",
            choices: ["Account Executive", "Sales Manager", "Software Engineer", "Lead Engineer", "Accountant", "Chief Revenue Officer", "Lawyer", "Chief of Counsel"]
        },
        {
            type: "list",
            message: "Which Employee would you like to view",
            name: "employee options",
            choices: [""]
        },
        {
            type: "input",
            message: "Please enter the name of the Department you would like to add",
            name: "add department",
        },
        {
            type: "input",
            message: "Please enter the title of the role you would like to add",
            name: "add role",
        },
       
        {
            type: "input",
            message: "Please enter the name of the new employee",
            name: "add role",
        },
       
        {
            type: "input",
            message: "What employee would you like to update?",
            name: "add role",
        },
        
    ])   