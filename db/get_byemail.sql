SELECT users.userId, users.email, vehicles FROM users
inner join vehicles
on users.userId = vehicles.vehicleid
WHERE email = $1;
