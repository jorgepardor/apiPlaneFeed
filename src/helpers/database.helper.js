const pool = require("../db");
const State = require("../models/state.models").State;



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
		return(newstate.rows[0]);
	} catch (error) {
		return({ error: error.message });
	}
	

};

const findFlightByFlightId = async (flight_id) => {
    try {
		const flight = await pool.query("SELECT * FROM flight WHERE iata = $1", [
			flight_id,
		]);

		if (flight.rows.length === 0) {
			res.status(404).json({ message: "Flight not found" });
		} else {
			res.status(200).json(flight.rows);
		}
	} catch (error) {
		res.json({ error: error.message });
	}
}

module.exports = { insertState , findFlightByFlightId };
