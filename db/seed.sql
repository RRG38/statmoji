DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS feelings_entries;

DROP TABLE IF EXISTS feelings_emojis;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  email VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

INSERT INTO users
(email, password)
VALUES
('ryan@email.com', 'ryan'),
('elizabeth@email.com', 'elizabeth'),
('kelsey@email.com', 'kelsey');

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
  feelings_hex_code TEXT,
  feelings_description TEXT
);

INSERT INTO feelings_emojis
(feelings_hex_code, feelings_description)
VALUES
('1f600', 'Happy');