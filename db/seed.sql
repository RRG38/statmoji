DROP TABLE IF EXISTS users;

CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  email VARCHAR(120),
  hash text
);

INSERT INTO users
(email, hash)
VALUES
('ryan@email.com', '$2a$10$wZUxoi7vsBOeHK3zhiY4H.Nc5WvuyukqmsGjat9XMGl40w3/RhdiW'),
('elizabeth@email.com', '$2a$10$KFR1RUO0JiFtCoux3mnJaemV6Ifnk0BOTdjm/VWh.uOZ97pD3X1Re'),
('kelsey@email.com', '$2a$10$dgo.HRAecEhFl8L0h.lJM.OeM2t8y5Pi3AmiBlfCXUIIS/PUtfwd.');