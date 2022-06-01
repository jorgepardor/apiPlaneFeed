const pool = require("../db");

// Retrieve aircrafts:

const getAllPlanes = async (req, res) => {
	try {
		const allPlanes = await pool.query("SELECT * FROM aircraft");
		res.json(allPlanes.rows);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const getPlane = async (req, res) => {
	const { id } = req.params;
	try {
		const plane = await pool.query("SELECT * FROM aircraft WHERE id = $1", [
			id,
		]);

		if (plane.rows.length === 0) {
			res.status(404).json({ message: "Aircraft not found" });
		} else {
			res.status(200).json(plane.rows);
		}
	} catch (error) {
		res.json({ error: error.message });
	}
};

// Aircraft creation:

const getAircraft = async (req, res) => {
	res.send("This will get an aircraft model in the database");
};

const addAircraft = async (req, res) => {
	try {
		const {
			id,
			registration,
			model,
			airline,
			reg_country,
			picture_url,
			ps_url,
			af_url,
		} = req.body;

		const newaircraft = await pool.query(
			"INSERT INTO aircraft (id, registration, model, airline, reg_country, picture_url, ps_url, af_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
			[
				id,
				registration,
				model,
				airline,
				reg_country,
				picture_url,
				ps_url,
				af_url,
			]
		);

		res.json(newaircraft.rows[0]);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const updateAircraft = async (req, res) => {
	res.send("This will update an aircraft model in the database");
};

const deleteAircraft = async (req, res) => {
	res.send("This will delete an aircraft model in the database");
};

module.exports = {
	getAllPlanes,
	getPlane,
	getAircraft,
	addAircraft,
	updateAircraft,
	deleteAircraft,
};
