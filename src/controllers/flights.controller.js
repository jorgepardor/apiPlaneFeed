const pool = require("../db");

// Flight creation:

const getAllFlights = async (req, res) => {
	try {
		const allFlights = await pool.query("SELECT * FROM flight");
		res.json(allFlights.rows);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const getFlight = async (req, res) => {
	const { iata } = req.params;
	try {
		const flight = await pool.query("SELECT * FROM flight WHERE iata = $1", [
			iata,
		]);

		if (flight.rows.length === 0) {
			res.status(404).json({ message: "Flight not found" });
		} else {
			res.status(200).json(flight.rows);
		}
	} catch (error) {
		res.json({ error: error.message });
	}
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
	getAllFlights,
	addFlight,
	updateFlight,
	deleteFlight,
};
