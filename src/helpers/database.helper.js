const pool = require("../db");
const State = require("../models/state.models").State;

const insertFlight = async (state) => {
  console.log(state);
  try {
    const newstate = await pool.query(
      "INSERT INTO flight (iata, icao, timestamp, aircraft, route_from, route_to) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [
        state.iata,
        state.icao,
        state.timestamp,
        state.aircraft,
        state.route_from,
        state.route_to,
      ]
    );
    console.log(newstate);
    return newstate.rows[0];
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

const insertCountry = async (country) => {
  try {
    const newCountry = await pool.query(
      "INSERT INTO country (id, name, flag_url) VALUES ($1, $2, $3) RETURNING *",
      [country.id, country.name, country.flag_url]
    );
    return newCountry.rows[0];
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

const insertAircraft = async (state) => {
  console.log(state);
  try {
    const newaircraft = await pool.query(
      "INSERT INTO aircraft (id, registration, model, airline, reg_country, picture_url, ps_url, af_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        state.id,
        state.registration,
        state.model,
        state.airline,
        state.reg_country,
        state.picture_url,
        state.ps_url,
        state.af_url,
      ]
    );
    console.log(newaircraft);
    return newaircraft.rows[0];
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

const insertState = async (state) => {
  console.log(state);
  try {
    const newstate = await pool.query(
      "INSERT INTO state (aircraft_id, flight_id, timestamp, latitude, longitude, altitude, track, speed, squawk) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        state.aircraft_id,
        state.flight_id,
        state.timestamp,
        state.latitude,
        state.longitude,
        state.altitude,
        state.track,
        state.speed,
        state.squawk,
      ]
    );
    console.log(newstate);
    return newstate.rows[0];
  } catch (error) {
    console.log(error);
    return { error: error.message };
  }
};

const findFlightByFlightId = async (flight_id) => {
  try {
    const flight = await pool.query("SELECT * FROM flight WHERE iata = $1", [
      flight_id,
    ]);

    if (flight.rows.length === 0) {
      return [];
    } else {
      return flight.rows;
    }
  } catch (error) {
    return { error: error.message };
  }
};

const findAircraftByAircraftId = async (aircraft_id) => {
  try {
    const aircraft = await pool.query("SELECT * FROM aircraft WHERE id = $1", [
      aircraft_id,
    ]);

    if (aircraft.rows.length === 0) {
      return [];
    } else {
      return aircraft.rows;
    }
  } catch (error) {
    return { error: error.message };
  }
};

const findCountryByName = async (name) => {
  try {
    const country = await pool.query("SELECT * FROM country WHERE name = $1", [
		name,
    ]);

    if (country.rows.length === 0) {
      return [];
    } else {
      return country.rows;
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = {
  insertState,
  insertAircraft,
  insertFlight,
  insertCountry,
  findAircraftByAircraftId,
  findFlightByFlightId,
  findCountryByName
};
