const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
// const bodyParser = require('body-parser'); // body-parser isnt needed because our api just use GET Methods
const routes = require("./api");
dotenv.config();

const port = process.env.PORT || 5555;

const app = express();

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

// app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use("/api/items", routes.items);

app.listen(port, function() {
  console.log("server started on port: " + port);
});
