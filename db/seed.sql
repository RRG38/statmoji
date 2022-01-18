DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS feelings_entries;

DROP TABLE IF EXISTS feelings_emojis;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  email VARCHAR(120),
  hash text
);

INSERT INTO users
(email, hash)
VALUES
('ryan@email.com', '$2a$10$wZUx'),
('elizabeth@email.com', '$2a$10$KFR'),
('kelsey@email.com', '$2a$10$dgo.HRAecEhF');

CREATE TABLE feelings_entries
(
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  date TIMESTAMP,
  emoji_id INTEGER
);

CREATE TABLE feelings_emojis
(
  id SERIAL PRIMARY KEY,
  feelings_emoji_icon TEXT,
  feelings_emoji_description TEXT
);

INSERT INTO feelings_emojis
(feelings_emoji_icon, feelings_emoji_description)
VALUES
('😀', 'Happy');