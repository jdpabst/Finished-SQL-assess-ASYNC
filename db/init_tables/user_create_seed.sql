-- The table needs to be dropped each time you restart nodemon. This is necessary for the Postman tests.
-- =======================
DROP TABLE IF EXISTS users CASCADE;
-- =======================

-- Complete the create table statement below. The table should have the following columns and datatypes/constraints:

-- id ( auto incrementing primary key )
-- name ( string )
-- email (string)

CREATE TABLE IF NOT EXISTS users (
  id --(add datatype and/or table contraint),
  name --(add datatype and/or table contraint),
  email --(add datatype and/or table contraint)
);


-- Complete the first part of the insert statement below. The values below need to be inserted into the 'users' table.


VALUES
('John Smith', 'john@smith.com'),
('Dave Davis', 'dave@davis.com'),
('Jane Janis', 'jane@janis.com');
