SELECT users.name, vehicles.make, vehicles.model, vehicles.year, vehicles.owner_id FROM vehicles
JOIN users ON users.id = vehicles.owner_id
WHERE vehicles.year > 2000
ORDER BY year DESC