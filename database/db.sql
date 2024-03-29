CREATE TABLE "state"(
    "id" SERIAL PRIMARY KEY,
    "aircraft_id" VARCHAR(8) NOT NULL,
    "flight_id" VARCHAR(8) NOT NULL,
    "timestamp" INT NOT NULL,
    "latitude" FLOAT8 NOT NULL,
    "longitude" FLOAT8 NOT NULL,
    "altitude" INTEGER NOT NULL,
    "track" INTEGER NOT NULL,
    "speed" INTEGER NOT NULL,
    "squawk" INTEGER NOT NULL
);
CREATE TABLE "aircraft"(
    "id" VARCHAR(8) PRIMARY KEY,
    "registration" VARCHAR(255) NULL,
    "model" INTEGER NULL,
    "airline" VARCHAR(8) NULL,
    "reg_country" INT NULL,
    "picture_url" VARCHAR(255) NULL,
    "ps_url" VARCHAR(255) NULL,
    "af_url" VARCHAR(255) NULL
);
CREATE TABLE "model"(
    "id" SERIAL PRIMARY KEY,
    "manufacturer" VARCHAR(255) NOT NULL,
    "family" VARCHAR(255) NOT NULL,
    "model" VARCHAR(255) UNIQUE NOT NULL ,
    "picture_url" VARCHAR(255) NULL
);
CREATE TABLE "airline"(
    "iata" VARCHAR(8) PRIMARY KEY,
    "icao" VARCHAR(6) NULL,
    "name" VARCHAR(255) NOT NULL,
    "country" INT NULL,
    "url" VARCHAR(255) NULL,
    "logo_url" VARCHAR(255) NULL
);
CREATE TABLE "flight"(
    "iata" VARCHAR(8) PRIMARY KEY,
    "icao" VARCHAR(8) NULL,
    "timestamp" INT NULL,
    "aircraft" VARCHAR(8) NULL,
    "route_from" VARCHAR(8) NULL,
    "route_to" VARCHAR(8) NULL
);
CREATE TABLE "airports"(
    "iata" VARCHAR(8) PRIMARY KEY,
    "icao" VARCHAR(6) NULL,	
    "name" VARCHAR(255) NULL,
    "city" VARCHAR(255) NULL,
    "country" INT NULL,
    "url" VARCHAR(255) NULL,
    "picture_url" VARCHAR(255) NULL
);

CREATE TABLE "country"(
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) UNIQUE NOT NULL,
    "flag_url" VARCHAR(255) NULL
);

ALTER TABLE
    "aircraft" ADD CONSTRAINT "aircraft_model_foreign" FOREIGN KEY("model") REFERENCES "model"("id");
ALTER TABLE
    "aircraft" ADD CONSTRAINT "aircraft_airline_foreign" FOREIGN KEY("airline") REFERENCES "airline"("iata");
ALTER TABLE
    "airports" ADD CONSTRAINT "country_id_foreign" FOREIGN KEY("country") REFERENCES "country"("id");
ALTER TABLE
    "aircraft" ADD CONSTRAINT "aircraft_id_foreign" FOREIGN KEY("reg_country") REFERENCES "country"("id");
ALTER TABLE
    "airline" ADD CONSTRAINT "country_id_foreign" FOREIGN KEY("country") REFERENCES "country"("id");

INSERT INTO model (manufacturer, family, model, picture_url)
VALUES ('boeing', 'B737', 'B737-800', 'xxx');

INSERT INTO airline (iata, icao, name, country, url, logo_url)
VALUES ('FR', 'RYR', 'Ryanair', '1', 'xxx', 'xxx');

INSERT INTO airports (iata, icao, name, city, country, url, picture_url)
VALUES ('MAD', 'LEMD', 'Barajas', 'Madrid', '1', 'xxx', 'xxx');

INSERT INTO airports (iata, icao, name, city, country, url, picture_url)
VALUES ('BCN', 'BCN', 'Prat', 'Barcelona', '1', 'xxx', 'xxx');

INSERT INTO aircraft (id, registration, model, airline, reg_country, picture_url, ps_url, af_url)
VALUES ('000000', 'EZ-AAA', '1', 'FR', '1', 'xxx', 'xxx', 'xxx');

INSERT INTO flight (iata, icao, timestamp, aircraft, position, route_from, route_to)
VALUES ('FR335','RYR335', '1654366689', '000000', '1', 'MAD', 'BCN');

INSERT INTO state (aircraft_id, flight_id, timestamp, latitude, longitude, altitude, track, speed, squawk)
VALUES ('000000', 'FR335', '1654366689', '1', '1','11111', '180', '1000', '5000');

INSERT INTO state (aircraft_id, flight_id, timestamp, latitude, longitude, altitude, track, speed, squawk)
VALUES ('000000', 'FR335', '1654366700', '2', '2','11111', '180', '1000', '5000');