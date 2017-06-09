-- The table needs to be dropped each time you restart nodemon. This is necessary for the Postman tests.
-- === DROP TABLE ====================

DROP TABLE IF EXISTS vehicles;

-- === CREATE TABLE ==================

-- Complete the create table statement below. The table should have the following columns:

-- id         should be an auto-incrementing number, primary key
-- make       should be a string
-- model      should be a string
-- year       should be a number
-- owner_id   should be a number, foreign key

CREATE TABLE IF NOT EXISTS vehicles (
  id --(add datatype and/or table contraint),
  make --(add datatype and/or table contraint),
  model --(add datatype and/or table contraint),
  year --(add datatype and/or table contraint),
  owner_id --(add datatype and/or table contraint)
);

-- === INSERT STATEMENT ===============

-- Complete the insert statement below. The values below need to be inserted into the 'vehicles' table.


('Toyota', 'Camry', 1991, 1),
('Honda', 'Civic', 1995, 1),
('Ford', 'Focus', 2005, 1),
('Ford', 'Taurus', 2003, 2),
('VW', 'Bug', 2010, 2),
('Mini', 'Cooper', 2013, 3);
