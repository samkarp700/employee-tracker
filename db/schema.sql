DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;

CREATE TABLE departments (
    name VARCHAR(30),
    id INTEGER PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE roles (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30), 
    salary DECIMAL, 
    department_id INTEGER, 
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INTEGER, 
    FOREIGN KEY (role_id) REFERENCES roles(id),
    manager_id INTEGER, 
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);


