SELECT *, users.firstname, users.lastname FROM vehicles
INNER JOIN users
ON vehicles.vehicleid = users.userId
WHERE years > 2000
ORDER BY years DESC
