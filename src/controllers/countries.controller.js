const pool = require("../db");

// Country creation:

const getAllCountries = async (req, res) => {
	try {
		const allCountries = await pool.query("SELECT * FROM country");
		res.json(allCountries.rows);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const getCountry = async (req, res) => {
	const { id } = req.params;
	try {
		const country = await pool.query("SELECT * FROM country WHERE id = $1", [
			id,
		]);

		if (country.rows.length === 0) {
			res.status(404).json({ message: "Country not found" });
		} else {
			res.status(200).json(country.rows);
		}
	} catch (error) {
		res.json({ error: error.message });
	}
};

const addCountry = async (req, res) => {
	const { name, flag_url } = req.body;

	try {
		const newcountry = await pool.query(
			"INSERT INTO country (name, flag_url) VALUES ($1, $2) RETURNING *",
			[name, flag_url]
		);
		res.json(newcountry.rows[0]);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const updateCountry = async (req, res) => {
	res.send("This will update an country model in the database");
};

const deleteCountry = async (req, res) => {
	const { id } = req.params;
	try {
		const removecountry = await pool.query(
			"SELECT * FROM country WHERE id = $1",
			[id]
		);

		if (plane.rows.length === 0) {
			res.status(404).json({ message: "Aircraft not found" });
		}
		res.json(plane.rows);
	} catch (error) {
		res.json({ error: error.message });
	}
};

module.exports = {
	addCountry,
	getCountry,
	getAllCountries,
	updateCountry,
	deleteCountry,
};
