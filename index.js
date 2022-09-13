const inquirer = require('inquirer');
const mysql = require('mysql2');
const db = require('./db/connection');
const inputCheck = require('./utils/inputCheck');


const beginPrompt = () => {
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
        } else if (employerData.options === 'Add a Department') {
            addDepPrompt();
        } else if (employerData.options === 'Add a role') {
            // addRole();adjust
        } else if (employerData.options === 'Add a new employee') {
            // addEmp();adjust
        } else if (employerData.options === 'Update Employee') {
            // updateEmp(); adjust
        }
    });
};

const addDepPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name', 
            message: 'What is the name of the department?', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the department you want to add.');
                    return false;
                }
            }
        }, 
    ]) .then(addDep);
}

const addDep = (body) => {
    const errors = inputCheck(body, 'name');
    if (errors) {
        console.log(errors);
        return;
    }
    const sql = `INSERT INTO departments (name)
    VALUES (?)`;
    const params = [body.name];

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows) 
        beginPrompt();
    });
};
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
        beginPrompt();
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
        beginPrompt();
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
        beginPrompt();
    });
};

//new employee

//update employee


beginPrompt();