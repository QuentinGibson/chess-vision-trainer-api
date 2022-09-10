const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const errorhandler = require("errorhandler");
const logger = require("morgan");
const cors = require('cors')

const recordsRouter = require("./routes/records");
require("dotenv").config();

const app = express();

app.use(logger("dev"));
app.use(helmet({
  crossOriginResourcePolicy: { policy: "same-site" },
}));
app.use(cors())
app.use(bodyParser.json());
if (process.env.NODE_ENV === "development") {
  app.use(errorhandler());
}
app.use("/records", recordsRouter);

module.exports = app;
