const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'employees_db',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('You are connected to the employees_db database');
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

  function addDepartment() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'Enter the name of the department:',
          name: 'departmentName',
        },
      ])
      .then((answers) => {
        connection.query(
          'INSERT INTO department (name) VALUES (?)',
          [answers.departmentName],
          (err) => {
            if (err) throw err;
            console.log('Department added successfully!');
            generateQuestions();
          }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function addRole() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'Enter the title of the role:',
          name: 'roleTitle',
        },
        {
          type: 'number',
          message: 'Enter the salary for the role:',
          name: 'roleSalary',
        },
        {
          type: 'number',
          message: 'Enter the department ID for the role:',
          name: 'departmentId',
        },
      ])
      .then((answers) => {
        connection.query(
          'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)',
          [answers.roleTitle, answers.roleSalary, answers.departmentId],
          (err) => {
            if (err) throw err;
            console.log('Role added successfully!');
            generateQuestions();
          }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }  

  function addEmployee() {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'Enter the first name of the employee:',
          name: 'firstName',
        },
        {
          type: 'input',
          message: 'Enter the last name of the employee:',
          name: 'lastName',
        },
        {
          type: 'number',
          message: 'Enter the role ID for the employee:',
          name: 'roleId',
        },
        {
          type: 'number',
          message: "Enter the manager's ID for the employee:",
          name: 'managerId',
        },
      ])
      .then((answers) => {
        connection.query(
          'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
          [answers.firstName, answers.lastName, answers.roleId, answers.managerId],
          (err) => {
            if (err) throw err;
            console.log('Employee added successfully!');
            generateQuestions();
          }
        );
      })
      .catch((err) => {
        console.error(err);
      });
  }