DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;

CREATE TABLE departments (
    id INTEGER PRIMARY KEY, 
    name VARCHAR(30)
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY, 
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INTEGER, 
    manager_id INTEGER
);

CREATE TABLE roles (
    id INTEGER PRIMARY KEY, 
    title VARCHAR(30), 
    salary DECIMAL, 
    department_id INTEGER
);
