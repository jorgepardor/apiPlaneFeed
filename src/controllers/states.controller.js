const pool = require("../db");

// State creation:

const getState = async (req, res) => {
	res.send("This will get an state in the database");
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

module.exports = {
	getState,
	addState,
};
