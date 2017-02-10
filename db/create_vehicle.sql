INSERT INTO vehicles
(make, model, years, owners)
values
($1,$2,$3, $4)
RETURNING *;
