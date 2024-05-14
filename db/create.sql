CREATE DATABASE task_manager; 

CREATE TABLE tasks (
    id_tasks SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(2000)
);