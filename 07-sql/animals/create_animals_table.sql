-- table names are always plural and they are always snake case
-- What fields do we want?
  -- ID
  -- Species
  -- Image
  -- Description

CREATE TABLE animals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  species TEXT,
  description TEXT,
  image TEXT
);
