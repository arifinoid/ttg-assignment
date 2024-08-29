CREATE TABLE IF NOT EXISTS owners (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
);

INSERT INTO owners VALUES(1, 'John Doe');
INSERT INTO pets (name, type) VALUES("momo", "cat");
