const { Router } = require("express");
const { getAllPlanes } = require("../controllers/planes.controller");

const router = Router();

router.get("/", (req, res) => {
	res.send("Hello Planes!");
});

router.get("/aircrafts", getAllPlanes);

router.get("/aircraft/{id}", (req, res) => {
	res.send("This is the aircraft with id: " + req.params.id);
});

router.post("/aircraft", (req, res) => {
	res.send("You are in the aircrafts route");
});

router.put("/aircraft", (req, res) => {
	res.send("You are in the aircrafts route");
});

router.delete("/aircraft", (req, res) => {
	res.send("You are in the aircrafts route");
});

router.get("/aircraft/{id}", (req, res) => {
	res.send("This is the aircraft with id: " + req.params.id);
});

module.exports = router;
