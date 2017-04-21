-- READ Step of our CRUD System

-- SELECT _____ FROM ______ WHERE ______;

-- SELECT * FROM people;
--
-- SELECT first_name FROM people;
-- SELECT id, last_name FROM people;

-- SELECT * FROM people WHERE first_name == "Bill";
--
-- SELECT * FROM people WHERE id == 2;

-- SELECT * FROM people WHERE first_name == "Harpo" AND last_name == "Marx";

SELECT first_name, last_name FROM people WHERE id == 3;
