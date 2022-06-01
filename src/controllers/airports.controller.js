const pool = require("../db");

// Airport creation:

const getAllAirports = async (req, res) => {
	try {
		const allAirports = await pool.query("SELECT * FROM airports ORDER BY country ASC, city ASC, iata ASC");
		res.json(allAirports.rows);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const getAirport = async (req, res) => {
	const { iata } = req.params;
	try {
		const airport = await pool.query("SELECT * FROM airports WHERE iata = $1", [
			iata,
		]);

		if (airport.rows.length === 0) {
			res.status(404).json({ message: "Airport not found" });
		} else {
			res.status(200).json(airport.rows);
		}
	} catch (error) {
		res.json({ error: error.message });
	}
};

const addAirport = async (req, res) => {
	const { iata, icao, name, city, country, url, picture_url } = req.body;

	try {
		const newairport = await pool.query(
			"INSERT INTO airports (iata, icao, name, city, country, url, picture_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
			[iata, icao, name, city, country, url, picture_url]
		);

		res.json(newairport.rows[0]);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const updateAirport = async (req, res) => {
	res.send("This will update an airport model in the database");
};

const deleteAirport = async (req, res) => {
	res.send("This will delete an airport model in the database");
};

module.exports = {
	getAirport,
	getAllAirports,
	addAirport,
	updateAirport,
	deleteAirport,
};
