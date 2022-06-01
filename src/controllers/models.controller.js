const pool = require("../db");

// Model creation:

const getAllModels = async (req, res) => {
	try {
		const allModels = await pool.query("SELECT * FROM model");
		res.json(allModels.rows);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const getModel = async (req, res) => {
	const { id } = req.params;
	try {
		const model = await pool.query("SELECT * FROM model WHERE id = $1", [
			id,
		]);

		if (model.rows.length === 0) {
			res.status(404).json({ message: "Model not found" });
		} else {
			res.status(200).json(model.rows);
		}
	} catch (error) {
		res.json({ error: error.message });
	}
};

const addModel = async (req, res) => {
	const { manufacturer, family, model, picture_url } = req.body;

	try {
		const newmodel = await pool.query(
			"INSERT INTO model (manufacturer, family, model, picture_url) VALUES ($1, $2, $3, $4) RETURNING *",
			[manufacturer, family, model, picture_url]
		);
		res.json(newmodel.rows[0]);
	} catch (error) {
		res.json({ error: error.message });
	}
};

const updateModel = async (req, res) => {
	res.send("This will update an airplane model in the database");
};

const deleteModel = async (req, res) => {
	res.send("This will delete an airplane model in the database");
};

module.exports = {
	getModel,
	getAllModels,
	addModel,
	updateModel,
	deleteModel,
};
