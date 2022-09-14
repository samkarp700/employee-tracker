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
            addRolePrompt();
        } else if (employerData.options === 'Add a new employee') {
            addEmpPrompt();
        } else if (employerData.options === 'Update Employee') {
            updateEmpPrompt();
        }
    });
};
//department functions and prompts
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
        } 
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
        console.table(result) 
        beginPrompt();
    });
};


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
const addRolePrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title', 
            message: 'What is the title of the role you wish to add?', 
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of the role you want to add.');
                    return false;
                }
            }
        }, 
        {
            type: 'input', 
            name: 'salary', 
            message: 'What is the salary for this role?',
            validate: salaryInput => {
                if (salaryInput) {
                    return true;
                } else {
                    console.log('Please enter the salary for this role.');
                    return false;
                }
            }
        }, 
        {
            type: 'list', 
            name: 'departments', 
            message: 'Which department is this role in?', 
            choices: [
                {
                    name: 'Operations',
                    value: 1
                }, 
                {
                    name: 'Engineering',
                    value: 2 
                }, 
                {
                    name: 'Human Resources', 
                    value: 3
                },
                {
                    name: 'Sales', 
                    value: 4
                }
            ]

        }

    ]) .then(addRole);
}

const addRole = (body) => {
    const errors = inputCheck(body, 'title', 'salary', 'departments');
    if (errors) {
        console.log(errors);
        return;
    }
    const sql = `INSERT INTO roles (title, salary, departments_id)
    VALUES (?,?,?)`;
    const params = [body.title, body.salary, body.departments];
    // console.log(body);

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(result);
        beginPrompt(); 
    });
};

// employee functions

// view all employees
const allEmployees = (req) => {
    const sql = `SELECT * FROM employees`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
            return;
        }
        console.table(rows);
        beginPrompt();
    });
};

//new employee
const addEmpPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input', 
            name: 'first_name', 
            message: 'What is the first name of the employee?', 
            validate: firstInput => {
                if (firstInput) {
                    return true;
                } else {
                    console.log('Please enter the employees first name!');
                    return false;
                }
            }
        }, 
        {
            type: 'input', 
            name: 'last_name', 
            message: 'What is the last name of the employee?', 
            validate: lastInput => {
                if (lastInput) {
                    return true;
                } else {
                    console.log('Please enter the employees last name.');
                    return false;
                }
            }
        }, 
        {
            type: 'list', 
            name: 'roles', 
            message: 'Which role are they in?', 
            choices: [
                {
                    name: 'Customer Support Specialist', 
                    value: 1
                }, 
                {
                    name: 'Customer Success Manager', 
                    value: 2
                }, 
                {
                    name: 'Operations Manager', 
                    value: 3
                }, 
                {
                    name: 'Software Engineer', 
                    value: 4
                }, 
                {
                    name: 'Project Manager', 
                    value: 5
                }, 
                {
                    name: 'Customer Success Engineer', 
                    value: 6
                }, 
                {
                    name: 'Mobile App Developer', 
                    value: 7
                }, 
                {
                    name: 'Engineer Lead', 
                    value: 8
                }, 
                {
                    name: 'Recruiter', 
                    value: 9
                }, 
                {
                    name: 'Trainer', 
                    value: 10
                }, 
                {
                    name: 'Payroll Coordinator', 
                    value: 11
                }, 
                {
                    name: 'Human Resources Manager', 
                    value: 12
                }, 
                {
                    name: 'SDR', 
                    value: 13
                }, 
                {
                    name: 'Payment Consultant', 
                    value: 14
                }, 
                {
                    name: 'Sales Lead', 
                    value: 15
                }
            ]
        }, 
        {
            type: 'list', 
            name: 'managers', 
            message: 'Who is their manager?', 
            choices: [
                {
                    name: 'Michael Scott', 
                    value: 1
                }, 
                {
                    name: 'Francis Fuller', 
                    value: 8
                }, 
                {
                    name: 'Nancy Nelson', 
                    value: 16
                }, 
                {
                    name: 'Tyler Theo', 
                    value: 22
                }
            ]
        }
    ]).then(addEmp);
}

const addEmp = (body) => {
    const errors = inputCheck(body, 'first_name', 'last_name','roles', 'managers');
    if (errors) {
        console.log(errors);
        return;
    }

    const sql = `INSERT INTO employees (first_name, last_name, roles_id, manager_id)
    VALUES (?,?,?,?)`;
    const params = [body.first_name, body.last_name, body.roles, body.managers];
    // console.log(body);

    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
       console.table(result);
       beginPrompt();
    });
};


//update employee
//start by selecting employee

const updateEmpPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list', 
            name: 'current', 
            message: 'Which employee is changing roles?', 
            choices: [
                {
                    name: 'Michael Scott', 
                    value: 1
                }, 
                {
                    name: 'Sally Seashells', 
                    value: 2
                }, 
                {
                    name: 'Aaron Ables', 
                    value: 3
                }, 
                {
                    name: 'Bri Byers', 
                    value: 4
                }, 
                {
                    name: 'Charlie Colson', 
                    value: 5
                }, 
                {
                    name: 'Daniel Dyer', 
                    value: 6
                }, 
                {
                    name: 'Edith Ender', 
                    value: 7
                }, 
                {
                    name: 'Francis Fuller', 
                    value: 8
                }, 
                {
                    name: 'Greg Gulf', 
                    value: 9
                }, 
                {
                    name: 'Harriet Holden', 
                    value: 10
                }, 
                {
                    name: 'Irene Igloo', 
                    value: 11
                }, 
                {
                    name: 'Jack Jordan', 
                    value: 12
                }, 
                {
                    name: 'Kyle Kooley', 
                    value: 13
                }, 
                {
                    name: 'Loren Logan', 
                    value: 14
                }, 
                {
                    name: 'Mary Mulligan', 
                    value: 15
                }, 
                {
                    name: 'Nancy Nelson', 
                    value: 16
                }, 
                {
                    name: 'Orville Organ', 
                    value: 17
                }, 
                {
                    name: 'Polly Pocket', 
                    value: 18
                }, 
                {
                    name: 'Quintin Quail', 
                    value: 19
                }, 
                {
                    name: 'Robby Rogers', 
                    value: 20
                }, 
                {
                    name: 'Sully Sylvester', 
                    value: 21
                }, 
                {
                    name: 'Theo Tyler', 
                    value: 22
                }, 
                {
                    name: 'Ursula Ulysses', 
                    value: 23
                }, 
                {
                    name: 'Vernon Voldemort', 
                    value: 24
                }, 
                {
                    name: 'Waylon Wilder', 
                    value: 25
                }, 
                {
                    name: 'Xavier Xylon', 
                    value: 26
                }, 
                {
                    name: 'Yvonne Yale', 
                    value: 27
                }, 
                {
                    name: 'Zelda Zion', 
                    value: 28
                }
            ]

        },
        {
            type: 'list', 
            name: 'updateRoles', 
            message: 'Your employee has been promoted! What is their new role?',
            choices: [
                {
                    name: 'Customer Support Specialist', 
                    value: 1
                }, 
                {
                    name: 'Customer Success Manager', 
                    value: 2
                }, 
                {
                    name: 'Operations Manager', 
                    value: 3
                }, 
                {
                    name: 'Software Engineer', 
                    value: 4
                }, 
                {
                    name: 'Project Manager', 
                    value: 5
                }, 
                {
                    name: 'Customer Success Engineer', 
                    value: 6
                }, 
                {
                    name: 'Mobile App Developer', 
                    value: 7
                }, 
                {
                    name: 'Engineer Lead', 
                    value: 8
                }, 
                {
                    name: 'Recruiter', 
                    value: 9
                }, 
                {
                    name: 'Trainer', 
                    value: 10
                }, 
                {
                    name: 'Payroll Coordinator', 
                    value: 11
                }, 
                {
                    name: 'Human Resources Manager', 
                    value: 12
                }, 
                {
                    name: 'SDR', 
                    value: 13
                }, 
                {
                    name: 'Payment Consultant', 
                    value: 14
                }, 
                {
                    name: 'Sales Lead', 
                    value: 15
                }
            ]
        }
    ])
    .then(updateEmp);
}
const updateEmp = (body) => {
    const errors = inputCheck(body, 'current', 'updateRoles');
    if (errors) {
        console.log(errors);
        return;
    }

    const sql = `UPDATE employees SET ${body.updateRoles} WHERE id = ${body.current} `;
    const params = [body.current, body.updateRoles];
    console.log(body);
    db.query(sql, params, (err, result) => {
        if (err) {
            console.log(err);
        } else if (!result.affectedRows) {
            console.log('Candidate not found!');
        
        } else {
            console.table(result);
            beginPrompt();
        };
    });
};


beginPrompt();