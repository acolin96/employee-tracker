INSERT INTO department (id, name)
VALUES (001, 'Web Development'),
       (002, 'Sales'),
       (003, 'Sales Engineer'),
       (004, 'Marketing');

INSERT INTO employee_role (id, title, salary, department_id)
VALUES (001, 'Sr. Vice President', 350000.00, 002),
       (002, 'Sr. Director', 200000.00, 002),
       (003, 'Director', 98000.00, 004),
       (004, 'Supervisor', 80000.00, 003),
       (005, 'Sr. developer', 175000.00, 001),
       (006, 'Jr. Associate', 85000.00, 004);

INSERT INTO employee (first_name, last_name, role_id)
VALUES ('Alex', 'Colin', 001),
       ('Barry', 'Badrinath', 006),
       ('Himmy', 'Neutron', 002),
       ('Him', 'Duncan', 003),
       ('Gerald', 'Smith', 006),
       ('Tricia', 'Anderson', 005),
       ('Lauren', 'Goldstein', 004),
       ('Johnny', 'Pearseed', 006);

-- UPDATE INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES ('Michael', 'Jordan', 004, 001);
