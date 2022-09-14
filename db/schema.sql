DROP DATABASE IF EXISTS employee;
CREATE DATABASE employee;
USE employee;

CREATE TABLE departments (
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(30)
);

CREATE TABLE roles (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30), 
    salary DECIMAL, 
    departments_id INTEGER, 
    FOREIGN KEY (departments_id) REFERENCES departments(id)
);

CREATE TABLE employees (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30), 
    last_name VARCHAR(30), 
    roles_id INTEGER, 
    FOREIGN KEY (roles_id) REFERENCES roles(id),
    manager_id INTEGER, 
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);


