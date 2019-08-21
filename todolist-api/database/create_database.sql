-- User: todolist
-- DROP USER todolist;

create database todolist;

CREATE USER todolist WITH
  LOGIN
  SUPERUSER
  encrypted password 'todolist';

grant all privileges on database todolist to todolist;