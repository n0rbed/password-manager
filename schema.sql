CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(50),
    hash TEXT NOT NULL,
    date_created date NOT NULL
);
CREATE UNIQUE INDEX username on users(username);

CREATE TABLE passwords (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    owner_id INT NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES users(id)
);
