
const cloudinary = require("cloudinary");

const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));

const readFeeder = async () => {
	const response = await fetch("http://192.168.0.200:8754/flights.json");
	const body = await response.json();

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

const readCountries = async () => {
	const response = await fetch("https://www.flightradar24.com/mobile/countries");
	const countries = await response.json();
  return countries.data;
};

const uploadImage = async (filePath, path) => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder: path
  };

  try {
    // Upload the image
    const result = await cloudinary.v2.uploader.upload(filePath, options);
    return result.url;
  } catch (error) {
    console.error(error);
    return null
  }
};

module.exports = {
  readCountries,
  uploadImage
};