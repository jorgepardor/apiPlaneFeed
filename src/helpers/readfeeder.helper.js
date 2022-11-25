const State = require("../models/state.models").State;
const database = require("../helpers/database.helper.js");

const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));

const readFeeder = async () => {
	const response = await fetch("http://192.168.0.200:8754/flights.json");
	const body = await response.json();
	return (body);

	for (let x in body) {
		const state = new State(body[x]);

		if (state.validate()) {
			console.log(state.json());
			const findFlight = await database.findFlightByFlightId(state.getFlightId());
			console.log(findFlight);
			if (findFlight.length === 0) {
				const insertState = await database.insertState(state.json());
				console.log( "tuculo" +insertState);
			}
			else {
				console.log ("otro mensaje")
			}
			
		}
		
	}
};

module.exports = { readFeeder };
