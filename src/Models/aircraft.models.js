class Aircraft {
	fields = {
		id: null,
		registration: null,
		model: null,
		airline: null,
		reg_country: null,
		picture_url: null,
		ps_url: null,
		af_url: null,
	};



	constructor(id, registration = null, model = null, airline = null, reg_country = null, picture_url = null, ps_url = null, af_url = null) {
		this.fields.id = id || null;
		this.fields.registration = registration || null;
		this.fields.model = model || null;
		this.fields.airline = airline || null;
		this.fields.reg_country = reg_country || null;
		this.fields.picture_url = picture_url || null;
		this.fields.ps_url = ps_url || null;
		this.fields.af_url = af_url || null;
			}

	json() {
		return this.fields;
	}
	getAircraftId() {
		return this.fields.id;
	}

}

exports.Aircraft = Aircraft;
