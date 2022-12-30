const fetch = require("../helpers/readfeeder.helper.js");
const external = require("../helpers/external.helper.js");
const Country = require("../models/country.models").Country;
const database = require("../helpers/database.helper.js");

const scheduleReader = async () => {
  fetch.readFeeder();
};

const fetchCountries = async () => {
  console.log('starting save countries')
  countries = await external.readCountries();

  for (let x in countries) {
		const country = new Country(countries[x].id, countries[x].name.default);
    const findCountry = await database.findCountryByName(country.getName());

    if (findCountry.length === 0) {
      const imageName = country.getName().replaceAll(' ', '-').toLowerCase()
      country.setFlagUrl(await external.uploadImage(
        `https://www.flightradar24.com/static/images/data/flags-small/${imageName}.gif`, 
        '/apiplaneweb/countries')
      )
      await database.insertCountry(country.json());
      console.log(`${country.getName()} saved`);
    }
	}
};

module.exports = { scheduleReader, fetchCountries };
