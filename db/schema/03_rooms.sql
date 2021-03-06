DROP TABLE IF EXISTS rooms
CASCADE;

CREATE TABLE rooms
(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  public BOOLEAN DEFAULT TRUE,
  max_players INTEGER DEFAULT 2,
  inactivity_length INTEGER DEFAULT 1440,
  access_code VARCHAR
  (6), 
  photo_id INTEGER REFERENCES photos
  (id) ON
  DELETE CASCADE,
  host_id INTEGER
  REFERENCES users
  (id) ON
  DELETE CASCADE,
  timestamp TIMESTAMP
  );