INSERT INTO departments (name)
    VALUES
    ('Operations'), 
    ('Engineering'), 
    ('Human Resources'), 
    ('Sales');


INSERT INTO roles (title, salary, departments_id)
    VALUES
    ('Customer Support Specialist', 40000, 1), 
    ('Customer Success Manager', 60000, 1), 
    ('Operations Manager', 85000, 1), 
    ('Software Engineer', 100000, 2), 
    ('Project Manager', 90000, 2), 
    ('Customer Success Engineer', 80000, 2), 
    ('Mobile App Developer', 100000, 2), 
    ('Engineer Lead', 120000, 2), 
    ('Recruiter', 60000, 3), 
    ('Trainer', 75000, 3), 
    ('Payroll Coordinator', 60000, 3), 
    ('Human Resources Manager', 90000, 3), 
    ('SDR', 40000, 4), 
    ('Payment Consultant', 100000, 4), 
    ('Sales Lead', 150000, 4);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
    VALUES
    ('Michael', 'Scott', 3, NULL), 
    ('Sally', 'Seashells', 2, 1), 
    ('Aaron', 'Ables', 2, 1), 
    ('Bri', 'Byers', 2, 1), 
    ('Charlie', 'Colson', 1, 1), 
    ('Daniel', 'Dyer', 1, 1), 
    ('Edith', 'Ender', 1, 1),
    ('Francis','Fuller', 8, NULL),
    ('Greg', 'Gulf', 4, 8), 
    ('Harriet', 'Holden', 4, 8),
    ('Irene', 'Igloo', 5, 8),
    ('Jordan', 'Jack', 6, 8), 
    ('Kyle', 'Kooley', 6, 8), 
    ('Loren', 'Logan', 7, 8), 
    ('Mary', 'Mulligan', 7, 8),
    ('Nancy', 'Nelson', 12, NULL), 
    ('Orville', 'Organ', 11, 16),
    ('Polly', 'Pocket', 10, 16), 
    ('Quintin', 'Quail', 10, 16),
    ('Robby', 'Rogers', 9, 16), 
    ('Sully', 'Sylvester', 9, 16), 
    ('Theo', 'Tyler', 15, NULL), 
    ('Ursula', 'Ulysses', 14, 22), 
    ('Vernon', 'Voldemort', 14, 22), 
    ('Waylon', 'Wilder', 14, 22), 
    ('Xavier', 'Xylon', 13, 22), 
    ('Yvonne', 'Yale', 13, 22), 
    ('Zelda', 'Zion', 13, 22);