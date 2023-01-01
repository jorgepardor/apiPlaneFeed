const State = require("../models/state.models").State;
const database = require("../helpers/database.helper.js");
const Aircraft = require("../models/aircraft.models").Aircraft;
const Flight = require("../models/flight.models").Flight;

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const addAircraft = async (aircraftId) => {
  let findAircraft = await database.findAircraftByAircraftId(aircraftId);
  if (findAircraft.length === 0) {
    const aircraft = new Aircraft(aircraftId);
    findAircraft = await database.insertAircraft(aircraft.json());

    return aircraft;
  }
  console.log(findAircraft[0].id);
  const result = new Aircraft(
    findAircraft[0].id,
    findAircraft[0].registration,
    findAircraft[0].model,
    findAircraft[0].airline,
    findAircraft[0].reg_country,
    findAircraft[0].picture_url,
    findAircraft[0].picture_url,
    findAircraft[0].ps_url,
    findAircraft[0].af_url
  );
  return result;
};

const addFlight = async (flight_id, aircraft_id) => {
  let findFlight = await database.findFlightByFlightId(flight_id);
  if (findFlight.length === 0) {
    const flight = new Flight(flight_id, aircraft_id);
    findFlight = await database.insertFlight(flight.json());

    return flight;
  }
  const result = new Flight(
    findFlight[0].iata,
    findFlight[0].icao,
    findFlight[0].timestamp,
    findFlight[0].aircraft,
    findFlight[0].route_from,
    findFlight[0].route_to
  );
  return result;
};

const readFeeder = async () => {
  const response = await fetch("http://80.174.124.77:39933/flights.json");
  const body = await response.json();
  // return (body);
  //   console.log(body)
  const currentPlanes = [];
  for (let x in body) {
    console.log(x);
    const state = new State(body[x]);

    const plane = currentPlanes.push();

    // if (state.validate()) {
    //   console.log(state.json());
    //   const aircraft = await addAircraft(state.getAircraftId());
    //   console.log("******************************");
    //   const findFlight = await addFlight(
    //     state.getFlightId(),
    //     aircraft.getAircraftId()
    //   );
    //   console.log(findFlight);

    //   const insertState = await database.insertState(state.json());
    //   console.log("tuculo" + insertState);

    // } else {
    //   console.log("no hay aviones ahora mismo");
    // }
  }
  return currentPlanes;
};

module.exports = { readFeeder };
