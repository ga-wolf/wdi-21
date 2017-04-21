-- INSERT INTO people (id, first_name) VALUES (5, "Quartet");
-- INSERT INTO people (id, first_name) VALUES (6, "Frantelle");
-- INSERT INTO people (id, first_name) VALUES (7, "Hard Graft");

SELECT * FROM people;

DELETE FROM people WHERE id == 4;

DELETE FROM people WHERE first_name == "Frantelle";

DELETE FROM people WHERE first_name == "Second User" AND last_name == "MARX";

SELECT * FROM people;
