const express = require("express");
const morgan = require("morgan");

const planesRoutes = require("./routes/planes.routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(planesRoutes);

app.listen(3001);
console.log("Server is running on port 3001");
