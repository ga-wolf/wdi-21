-- Creating a table
  -- Three fields: id, first_name, last_name
-- We want to execute this SQL code in the context of database.db
  -- sqlite3 database.db < create_people_table.sql
-- Check that it worked
  -- Opens up a SQL REPL: sqlite3 database.db
  -- Check the contents: .schema
  -- Exit the REPL: CTRL + D

CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  first_name TEXT,
  last_name TEXT
);
