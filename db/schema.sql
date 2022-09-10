DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;

CREATE TABLE departments (
    name VARCHAR(30),
    id INTEGER PRIMARY KEY
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY, 
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    role_id INTEGER, 
    manager_id INTEGER
);

CREATE TABLE roles (
    id INTEGER PRIMARY KEY, 
    title VARCHAR(30), 
    salary DECIMAL, 
    department_id INTEGER
);
