CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    hash TEXT NOT NULL,
    date_created date NOT NULL,
    key BYTEA NOT NULL
);
CREATE UNIQUE INDEX email on users(email);

CREATE TABLE passwords (
    id SERIAL PRIMARY KEY, 
    account_name TEXT NOT NULL,
    username TEXT NOT NULL,
    password BYTEA NOT NULL,
    owner_id INT NOT NULL,
    FOREIGN KEY (owner_id) REFERENCES users(id)
);
