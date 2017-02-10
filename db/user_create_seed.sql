-- It may be helpful to drop and reinstantilize the table when doing
-- the tests in case you delete users/cars the tests are expecting to see

DROP TABLE IF EXISTS vehicles;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
       userId SERIAL PRIMARY KEY,
       firstname VARCHAR(40),
       lastname VARCHAR(40),
       email VARCHAR(60)
   )

INSERT INTO users (firstname, lastname, email) values( 'John', 'Smith', 'John@Smith.com');
INSERT INTO users (firstname, lastname, email) values( 'Dave', 'Davis', 'Dave@Davis.com');
INSERT INTO users (firstname, lastname, email) values( 'Jane', 'Janis', 'Jane@Janis.com');
