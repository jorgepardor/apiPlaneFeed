const { Router } = require("express");
const {
	getAllPlanes,
	getPlane,
	getModel,
	addModel,
	updateModel,
	deleteModel,
	addAirport,
	getAirport,
	updateAirport,
	deleteAirport,
	addAirline,
	getAirline,
	updateAirline,
	deleteAirline,
    getAircraft,
    addAircraft,
    updateAircraft,
    deleteAircraft,

} = require("../controllers/planes.controller");

const router = Router();

router.get("/", (req, res) => {
	res.send("Hello Planes!");
});

router.get("/aircrafts", getAllPlanes); //Retrieve all planes in range

router.get("/aircraft/{id}", getPlane); // Retrieve a specific plane by id

//Airline management:

router.get("/airline", getAirline);

router.post("/airline", addAirline);

router.put("/airline", updateAirline);

router.delete("/airline", deleteAirline);

//Aircraft management:

router.get("/aircraft", getAircraft);

router.post("/aircraft", addAircraft);

router.put("/aircraft", updateAircraft);

router.delete("/aircraft", deleteAircraft);

//Airport management:

router.get("/airport", getAirport);

router.post("/airport", addAirport);

router.put("/airport", updateAirport);

router.delete("/airport", deleteAirport);

module.exports = router;

//Model management:

router.get("/model", getModel);

router.post("/model", addModel);

router.put("/model", updateModel);

router.delete("/model", deleteModel);
