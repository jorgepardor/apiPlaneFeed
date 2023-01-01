const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cron = require("node-cron");
const scheduler = require("./helpers/scheduler.helper.js");
const cloudinary = require("cloudinary");

require('dotenv').config()

const apiRoutes = require("./routes/api.routes");

const app = express();
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

app.use(apiRoutes);

cron.schedule("*/5 * * * * *", function () {
  // scheduler.scheduleReader();
  // console.log("I'm scheduling here");
});

var corsOptions = {
  origin: "localhost",
  preflightContinue: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.get("/states", cors(corsOptions), function (req, res, next) {
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(80, function () {
  console.log("CORS-enabled web server listening on port 80");
});

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});