-- Starting the transaction
begin transaction;

-- Reseting the table and the sequence
truncate table core_task;
alter sequence core_task_id_seq restart with 1;

-- Commiting
commit;
