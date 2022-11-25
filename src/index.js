const express = require("express");
const morgan = require("morgan");
const cors = require('cors')


const apiRoutes = require("./routes/api.routes");

const app = express();
app.use(cors())


app.use(morgan("dev"));
app.use(express.json());

app.use(apiRoutes);


var corsOptions = {
    origin: 'localhost',
    "preflightContinue": true,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.get('/states', cors(corsOptions), function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })


app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})