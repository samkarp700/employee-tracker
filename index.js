const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db/connection');

const beginPrompt = employerData => {
    return inquirer.prompt([
        //start questions
        {
            type: 'list', 
            name: 'options', 
            message: 'What would you like to do?', 
            choices: ['View all Departments',
                    'View all Roles', 
                    'View all Employees', 
                    'Add a Department', 
                    'Add a role', 
                    'Add a new employee', 
                    'Update Employee' ]
        }
    ])
    .then(employerData => {
        // if view all departments/roles/employees
        if (employerData.options === 'View all Departments') {
            allDeps();
        } else if (employerData.options === 'View all Roles') {
            allRoles();
        } else if (employerData.options === 'View all Employees') {
            allEmployees();
        }
    })
}
//department functions
//view all 
const allDeps = (req) => {
    const sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.table(rows) 
    });
};



// add departments


//role functions

//view all roles
const allRoles = (req) => {
    const sql = `SELECT * FROM roles`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.table(rows);

    });
};

// new roles

// employee functions

// view all employees
const allEmployees = (req) => {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        console.table(rows);
    
    });
};

//new employee

//update employee


