class Flight {
	fields = {
		iata: null,
		icao: null,
		timestamp: null,
		aircraft: null,
		position: null,
		route_from: null,
		route_to: null,
	};


	constructor(iata, icao, timestamp, aircraft, position, route_from, route_to) {
		this.fields.iata = iata || null;
		this.fields.icao = icao || null;
		this.fields.timestamp = timestamp || null;
		this.fields.aircraft = aircraft || null;
		this.fields.position = position || null;
		this.fields.route_from = route_from || null;
		this.fields.route_to = route_to || null;
	}

	json() {
		return this.fields;
	}

}

exports.Flight = Flight;
