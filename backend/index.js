const express = require("express");
const dotenv = require("dotenv");
// const bodyParser = require('body-parser'); // body-parser isnt needed because our api just use GET Methods
const routes = require('./api');
dotenv.config();

const port = process.env.PORT || 5555;

const app = express();

// app.use(bodyParser.json());
app.use('/api/items', routes.items);

app.listen(port, function() {
  console.log("server started on port: " + port);
});
