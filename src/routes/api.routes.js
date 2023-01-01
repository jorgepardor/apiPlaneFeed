const { Router } = require("express");
const {
	getAllPlanes,
	getPlane,
	getAircraft,
	addAircraft,
	updateAircraft,
	deleteAircraft,
} = require("../controllers/planes.controller");

const {
	getAirline,
	addAirline,
	updateAirline,
	deleteAirline,
	getAllAirlines,
} = require("../controllers/airlines.controller");

const {
	getAirport,
	addAirport,
	updateAirport,
	deleteAirport,
	getAllAirports,
} = require("../controllers/airports.controller");

const {
	addCountry,
	getCountry,
	updateCountry,
	deleteCountry,
	getAllCountries,
	fetchCountries
} = require("../controllers/countries.controller");

const {
	getFlight,
	addFlight,
	updateFlight,
	deleteFlight,
	getAllFlights,
} = require("../controllers/flights.controller");

const {
	getModel,
	getAllModels,
	addModel,
	updateModel,
	deleteModel,
} = require("../controllers/models.controller");

const { getState, addState, feedState } = require("../controllers/states.controller");
const { route } = require("express/lib/application");

const scheduler = require("../helpers/scheduler.helper.js");

const router = Router();

router.get("/", (req, res) => {
	res.send("Hello Planes!");
});

//Airline management:

router.get("/airline/:iata", getAirline);

router.get("/airlines", getAllAirlines);

router.post("/airline", addAirline);

router.put("/airline", updateAirline);

router.delete("/airline", deleteAirline);

//Country management:

router.get("/country/:id", getCountry);

router.get("/countries", getAllCountries);

router.post("/country", addCountry);

router.put("/country", updateCountry);

router.delete("/country/:id", deleteCountry);

//Aircraft management:

router.get("/aircrafts", getAllPlanes); 

router.get("/aircraft/:id", getPlane); 

router.get("/aircraft", getAircraft);

router.post("/aircraft", addAircraft);

router.put("/aircraft", updateAircraft);

router.delete("/aircraft", deleteAircraft);

//Airport management:

router.get("/airport/:iata", getAirport);

router.get("/airports", getAllAirports);

router.post("/airport", addAirport);

router.put("/airport", updateAirport);

router.delete("/airport", deleteAirport);

module.exports = router;

//Model management:

router.get("/model/:id", getModel);

router.get("/models", getAllModels);

router.post("/model", addModel);

router.put("/model", updateModel);

router.delete("/model", deleteModel);

//Flight management:

router.get("/flight/:iata", getFlight);

router.get("/flights", getAllFlights);

router.post("/flight", addFlight);

router.put("/flight", updateFlight);

router.delete("/flight", deleteFlight);

//State management:

router.get("/state", getState);

router.post("/state", addState);

router.get("/states", feedState);

// loaders

router.get("/fetchCountries", fetchCountries);