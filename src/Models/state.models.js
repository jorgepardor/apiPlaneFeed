class State {
	fields = {
		aircraft_id: null,
		flight_id: null,
		timestamp: null,
		latitude: null,
		longitude: null,
		altitude: null,
		track: null,
		speed: null,
		squawk: null,
	};

	constructor(data) {
		this.fields.aircraft_id = data[0] || null;
		this.fields.flight_id = data[16] || null;
		this.fields.timestamp = data[10] || null;
		this.fields.latitude = data[1] || null;
		this.fields.longitude = data[2] || null;
		this.fields.altitude = data[4] || null;
		this.fields.track = data[3] || null;
		this.fields.speed = data[5] || null;
		this.fields.squawk = data[6] || null;
	}

	json() {
		return this.fields;
	}

	validate() {
		if (this.fields.aircraft_id === null || this.fields.flight_id === null) {
			return false;
		}
		return true;
	}

	getFlightId() {
		return this.fields.flight_id;
	}
}

exports.State = State;
