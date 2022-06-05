const pool = require("../db");
const readFeeder = require("../helpers/readfeeder.helper.js");
const database = require("../helpers/database.helper.js");


// State creation:

const getState = async (req, res) => {
	const flight_id = req.query.flight_id;
	const aircraft_id = req.query.aircraft_id;
	const timestamp = Math.floor(new Date().getTime() / 1000);
	const yesterdayTimeStamp = timestamp - 28 * 60 * 60;

	console.log(flight_id);
	console.log(aircraft_id);
	try {
		const state = await pool.query(
			"SELECT * FROM state WHERE flight_id = $1 AND aircraft_id = $2 AND timestamp >= $3",
			[flight_id, aircraft_id, yesterdayTimeStamp]
		);

		if (state.rows.length === 0) {
			res.status(404).json({ message: "State not found" });
		} else {
			res.status(200).json(state.rows);
		}
	} catch (error) {
		res.json({ error: error.message });
	}
};

const addState = async (req, res) => {
	const {
		aircraft_id,
		flight_id,
		timestamp,
		latitude,
		longitude,
		altitude,
		track,
		speed,
		squawk,
	} = req.body;

	try {
		const newstate = await pool.query(
			"INSERT INTO state (aircraft_id, flight_id, timestamp, latitude, longitude, altitude, track, speed, squawk) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
			[
				aircraft_id,
				flight_id,
				timestamp,
				latitude,
				longitude,
				altitude,
				track,
				speed,
				squawk,
			]
		);
		res.json(newstate.rows[0]);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const feedState = async (req, res) => {
	const feed = await readFeeder.readFeeder();
	res.json(feed);


	
};

module.exports = {
	getState,
	addState,
	feedState
};
