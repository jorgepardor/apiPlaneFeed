class Flight {
	fields = {
		iata: null,
		icao: null,
		timestamp: null,
		aircraft: null,
		route_from: null,
		route_to: null,
	};


	constructor(iata, aircraft, icao = null, timestamp = null, route_from = null, route_to = null) {
		this.fields.iata = iata || null;
		this.fields.icao = icao || null;
		this.fields.timestamp = timestamp || null;
		this.fields.aircraft = aircraft || null;
		this.fields.route_from = route_from || null;
		this.fields.route_to = route_to || null;
	}

	json() {
		return this.fields;
	}

}

exports.Flight = Flight;
