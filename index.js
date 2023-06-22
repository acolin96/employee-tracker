const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'employee_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('You are connected to the employee_db database');
  generateQuestions();
});

function generateQuestions() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'primaryOption',
        choices: [
          'View all departments',
          'View all roles',
          'View all employees',
          'Add a department',
          'Add a role',
          'Add an employee',
          "Update an employee's role",
          'Exit',
        ],
      },
    ])
    .then((answers) => {
      switch (answers.primaryOption) {
        case 'View all departments':
          viewAllDepartments();
          break;
        case 'View all roles':
          viewAllRoles();
          break;
        case 'View all employees':
          viewAllEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case "Update an employee's role":
          updateEmployeeRole();
          break;
        case 'Exit':
          console.log('Exiting...');
          connection.end();
          process.exit(0);
        default:
          console.log('Invalid option selected.');
          generateQuestions();
      }
    })
    .catch((err) => {
      console.error(err);
    });
}

function viewAllDepartments() {
  connection.query('SELECT * FROM department', (err, departments) => {
    if (err) throw err;
    console.table(departments);
    generateQuestions();
  });
}

function viewAllRoles() {
    connection.query('SELECT * FROM role', (err, roles) => {
      if (err) throw err;
      console.table(roles);
      generateQuestions();
    });
  }
  
  function viewAllEmployees() {
    connection.query('SELECT * FROM employee', (err, employees) => {
      if (err) throw err;
      console.table(employees);
      generateQuestions();
    });
  }