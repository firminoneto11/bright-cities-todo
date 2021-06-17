-- Starting the transaction
begin transaction;

-- Reseting the table and the sequence
truncate table core_task;
alter sequence core_task_id_seq restart with 1;

-- Inserting data
insert into core_task (name, description, completed)
values ('Better filters', 'Work on a better filter logic, creating some html to improve the users visualization in some scenarios.', true);

insert into core_task (name, description, completed)
values ('Update', 'Create a new form with the data that was previously in the database, and update it after a change made by the user.', false);

insert into core_task (name, description, completed)
values ('Documentation', 'Keep in mind that we have to document every function, method or class that we create!', true);

insert into core_task (name, description, completed)
values ('Delete', 'Create a area where the user can delete the selected task.', false);

insert into core_task (name, description, completed)
values ('Items url', 'Create a custom and dynamic url for each one of the tasks based on their pk.', true);

insert into core_task (name, description, completed)
values ('Delete all', 'Create a button to delete all the data from the database, if the user choses to do so.', false);

-- Commiting
commit;

-- Couple selects
select id, name, description, completed from core_task order by id asc;

/*
-- Reset script
-- Starting the transaction
begin transaction;

-- Reseting the table and the sequence
truncate table core_task;
alter sequence core_task_id_seq restart with 1;

-- Commiting
commit;
*/