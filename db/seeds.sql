INSERT INTO departments (name, id)
    VALUES
    ('Operations', 1), 
    ('Engineering', 2), 
    ('Human Resources', 3), 
    ('Sales', 4);


INSERT INTO roles (id, title, salary, department_id)
    VALUES
    (1, 'Customer Support Specialist', 40000, 1), 
    (2, 'Customer Success Manager', 60000, 1), 
    (3, 'Operations Manager', 85000, 1), 
    (4, 'Software Engineer', 100000, 2), 
    (5, 'Project Manager', 90000, 2), 
    (6, 'Customer Success Engineer', 80000, 2), 
    (7, 'Mobile App Developer', 100000, 2), 
    (8, 'Engineer Lead', 120000, 2), 
    (9, 'Recruiter', 60000, 3), 
    (10, 'Trainer', 75000, 3), 
    (11, 'Payroll Coordinator', 60000, 3), 
    (12, 'Human Resources Manager', 90000, 3), 
    (13, 'SDR', 40000, 4), 
    (14, 'Payment Consultant', 100000, 4), 
    (15, 'Sales Lead', 150000, 4);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
    VALUES
    (1, 'Michael', 'Scott', 3, NULL), 
    (2, 'Sally', 'Seashells', 2, 1), 
    (3, 'Aaron', 'Ables', 2, 1), 
    (4, 'Bri', 'Byers', 2, 1), 
    (5, 'Charlie', 'Colson', 1, 1), 
    (6, 'Daniel', 'Dyer', 1, 1), 
    (7, 'Edith', 'Ender', 1, 1), 
    (8, 'Francis','Fuller', 8, NULL), 
    (9, 'Greg', 'Gulf', 4, 8), 
    (10, 'Harriet', 'Holden', 4, 8), 
    (11, 'Irene', 'Igloo', 5, 8), 
    (12, 'Jordan', 'Jack', 6, 8), 
    (13, 'Kyle' 'Kooley', 6, 8), 
    (14, 'Loren', 'Logan', 7, 8), 
    (15, 'Mary', 'Mulligan', 7, 8), 
    (16, 'Nancy', 'Nelson', 12, NULL), 
    (17, 'Orville', 'Organ', 11, 16), 
    (18, 'Polly', 'Pocket', 10, 16), 
    (19, 'Quintin', 'Quail', 10, 16), 
    (20, 'Robby', 'Rogers', 9, 16), 
    (21, 'Sully', 'Sylvester', 9, 16), 
    (22, 'Theo', 'Tyler', 15, NULL), 
    (23, 'Ursula', 'Ulysses', 14, 22), 
    (24, 'Vernon', 'Voldemort', 14, 22), 
    (25, 'Waylon', 'Wilder', 14, 22), 
    (26, 'Xavier', 'Xylon', 13, 22), 
    (27, 'Yvonne', 'Yale', 13, 22), 
    (28, 'Zelda', 'Zion', 13, 22);