CREATE DATABASE planesdb

CREATE TABLE model(
    id SERIAL PRIMARY KEY,
    manufacturer VARCHAR(255),
    model VARCHAR(255),
);