-- Table: developer
insert into developer (name) values ('david');
insert into developer (name) values ('juan');
insert into developer (name) values ('pedro');

-- Table: task
insert into task (title, description, estimate_time, developer_id ) values ('task 1', 'description task 1', 1.5, 1);
insert into task (title, description, estimate_time, developer_id ) values ('task 2', 'description task 2', 1.5, 2);
insert into task (title, description, estimate_time, developer_id ) values ('task 3', 'description task 3', 1.5, 3);