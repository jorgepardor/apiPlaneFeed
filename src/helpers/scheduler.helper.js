const fetch = require("../helpers/readfeeder.helper.js");

const scheduleReader = async () => {

        fetch.readFeeder();
        // console.log("I'm scheduling here inside the function");


};

module.exports = { scheduleReader };
