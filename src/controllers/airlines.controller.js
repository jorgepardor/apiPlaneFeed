const pool = require("../db");

// Airline creation:

const getAllAirlines = async (req, res) => {
	try {
		const allAirlines = await pool.query("SELECT * FROM airline ORDER BY name ASC");
		res.json(allAirlines.rows);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const getAirline = async (req, res) => {
	const { iata } = req.params;
	try {
		const airline = await pool.query("SELECT * FROM airline WHERE iata = $1", [
			iata,
		]);

		if (airline.rows.length === 0) {
			res.status(404).json({ message: "Airline not found" });
		} else {
			res.status(200).json(airline.rows);
		}
	} catch (error) {
		res.json({ error: error.message });
	}
};

const addAirline = async (req, res) => {
	const { iata, icao, name, country, url, logo_url } = req.body;

	try {
		const newairline = await pool.query(
			"INSERT INTO airline (iata, icao, name, country, url, logo_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
			[iata, icao, name, country, url, logo_url]
		);
		res.json(newairline.rows[0]);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const updateAirline = async (req, res) => {
	res.send("This will update an airline model in the database");
};

const deleteAirline = async (req, res) => {
	res.send("This will delete an airline model in the database");
};

module.exports = {
	getAirline,
	getAllAirlines,
	addAirline,
	updateAirline,
	deleteAirline,
};
