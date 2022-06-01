const pool = require("../db");

// Flight creation:

const getFlight = async (req, res) => {
	res.send("This will get an flight in the database");
};

const addFlight = async (req, res) => {
	const { iata, icao, timestamp, aircraft, position, route_from, route_to } =
		req.body;

	try {
		const newflight = await pool.query(
			"INSERT INTO flight (iata, icao, timestamp, aircraft, position, route_from, route_to) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
			[iata, icao, timestamp, aircraft, position, route_from, route_to]
		);
		res.json(newflight.rows[0]);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const updateFlight = async (req, res) => {
	res.send("This will update an flight in the database");
};

const deleteFlight = async (req, res) => {
	res.send("This will delete an flight in the database");
};

module.exports = {
	getFlight,
	addFlight,
	updateFlight,
	deleteFlight,
};
