INSERT INTO statmoji_users (email, hash)
VALUES ($1, $2)
returning id, email;