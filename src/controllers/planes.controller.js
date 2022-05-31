const pool = require("../db");

// Retrieve aircrafts:

const getAllPlanes = async (req, res) => {
	res.send("This will return a list of all planes detected in the radar");
};

const getPlane = async (req, res) => {
	res.send("This is the aircraft with id: " + req.params.id);
};

// Model creation:

const getModel = async (req, res) => {
	res.send("This will get an airplane model in the database");
};

const addModel = async (req, res) => {
	const { manufacturer, family, model, picture_url } = req.body;

	const newmodel = await pool.query(
		"INSERT INTO model (manufacturer, family, model, picture_url) VALUES ($1, $2, $3, $4) RETURNING *",
		[manufacturer, family, model, picture_url]
	);

	console.log(newmodel);
	res.send("The model was added to the database");
};

const updateModel = async (req, res) => {
	res.send("This will update an airplane model in the database");
};

const deleteModel = async (req, res) => {
	res.send("This will delete an airplane model in the database");
};

// Airline creation:

const getAirline = async (req, res) => {
	res.send("This will get an airline model in the database");
};

const addAirline = async (req, res) => {
	const { iata, icao, name, country, url, logo_url } = req.body;

	const newairline = await pool.query(
		"INSERT INTO airline (iata, icao, name, country, url, logo_url) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
		[iata, icao, name, country, url, logo_url]
	);

	console.log(newairline);
	res.send("The airline was added to the database");
};

const updateAirline = async (req, res) => {
	res.send("This will update an airline model in the database");
};

const deleteAirline = async (req, res) => {
	res.send("This will delete an airline model in the database");
};

// Aircraft creation:

const getAircraft = async (req, res) => {
	res.send("This will get an aircraft model in the database");
};

const addAircraft = async (req, res) => {
    const { id, registration, model, airline, reg_country, picture_url, ps_url, af_url } = req.body;

	const newaircraft = await pool.query(
		"INSERT INTO aircraft (id, registration, model, airline, reg_country, picture_url, ps_url, af_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
		[id, registration, model, airline, reg_country, picture_url, ps_url, af_url]
	);

	console.log(newaircraft);
	res.send("The aircraft was added to the database");
};

const updateAircraft = async (req, res) => {
	res.send("This will update an aircraft model in the database");
};

const deleteAircraft = async (req, res) => {
	res.send("This will delete an aircraft model in the database");
};

// Airport creation:

const getAirport = async (req, res) => {
	res.send("This will get an airport model in the database");
};

const addAirport = async (req, res) => {
	const { iata, icao, name, city, country, url, picture_url } = req.body;

	const newairport = await pool.query(
		"INSERT INTO airports (iata, icao, name, city, country, url, picture_url) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
		[iata, icao, name, city, country, url, picture_url]
	);

	console.log(newairport);
	res.send("The airport was added to the database");
};

const updateAirport = async (req, res) => {
	res.send("This will update an airport model in the database");
};

const deleteAirport = async (req, res) => {
	res.send("This will delete an airport model in the database");
};


// Flight creation:

const getFlight = async (req, res) => {
	res.send("This will get an flight in the database");
};

const addFlight = async (req, res) => {
	const { iata, icao, timestamp, aircraft, position, route_from, route_to } = req.body;

	const newflight = await pool.query(
		"INSERT INTO flight (iata, icao, timestamp, aircraft, position, route_from, route_to) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
		[iata, icao, timestamp, aircraft, position, route_from, route_to]
	);

	console.log(newflight);
	res.send("The flight was added to the database");
};

const updateFlight = async (req, res) => {
	res.send("This will update an flight in the database");
};

const deleteFlight = async (req, res) => {
	res.send("This will delete an flight in the database");
};

module.exports = {
	getAllPlanes,
	getPlane,
	getModel,
	addModel,
	updateModel,
	deleteModel,
	getAirline,
	addAirline,
	updateAirline,
	deleteAirline,
	getAirport,
	addAirport,
	updateAirport,
	deleteAirport,
	getAircraft,
	addAircraft,
	updateAircraft,
	deleteAircraft,
    getFlight,
    addFlight,
    updateFlight,
    deleteFlight
};
