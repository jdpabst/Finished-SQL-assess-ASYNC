-- The table needs to be dropped each time you restart nodemon. This is necessary for the Postman tests.
-- =======================
DROP TABLE IF EXISTS vehicles;
-- =======================

-- Write a create table statement below. The table needs to be called 'vehicles'. The table should have the following columns:

-- id ( auto incrementing primary key )
-- make ( string )
-- model (string)
-- year (integer)
-- owner (integer, foreign key)








-- Write an insert statement below. You will need to insert the user data into the 'users' table.




('Toyota', 'Camry', 1991, 1),
('Honda', 'Civic', 1995, 1),
('Ford', 'Focus', 2005, 1),
('Ford', 'Taurus', 2003, 2),
('VW', 'Bug', 2010, 2),
('Mini', 'Cooper', 2013, 3);
