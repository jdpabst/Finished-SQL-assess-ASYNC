SELECT vehicles.id, vehicles.make, vehicles.model, vehicles.year, vehicles.owner_id FROM vehicles
JOIN users ON users.id = vehicles.owner_id
WHERE users.name ILIKE $1