const State = require("../models/state.models").State;

const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));

const readFeeder = async () => {
	const response = await fetch("http://192.168.0.200:8754/flights.json");
	const body = await response.json();

	for (let x in body) {
		const state = new State(body[x]);

		if (state.validate()) {

		console.log(state.json());

		}
	}
	

};

module.exports = { readFeeder };