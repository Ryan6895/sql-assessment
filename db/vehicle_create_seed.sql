-- It may be helpful to drop and reinstantilize the table when doing
-- the tests in case you delete users/cars the tests are expecting to see
DROP TABLE IF EXISTS vehicles;

CREATE TABLE vehicles (
       vehicleid SERIAL PRIMARY KEY,
       make VARCHAR(40),
       model VARCHAR(40),
       years INTEGER,
       owners INTEGER
   )

INSERT INTO vehicles (make, model, years, owners) values ('Toyota', 'Camry', 1991, 1);
INSERT INTO vehicles (make, model, years, owners) values ('Honda', 'Civic', 1995, 1);
INSERT INTO vehicles (make, model, years, owners) values ('Ford', 'Focus', 2005, 1);
INSERT INTO vehicles (make, model, years, owners) values ('Ford', 'Taurus', 2003, 2);
INSERT INTO vehicles (make, model, years, owners) values ('VW', 'Bug', 2010, 2);
INSERT INTO vehicles (make, model, years, owners) values ('Mini', 'Coup', 2013, 3);
