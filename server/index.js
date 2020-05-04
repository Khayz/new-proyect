const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: __dirname + "/.env" });

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Database running")
);

const authRoute = require("./routes/authentication.route");
const childsRoute = require("./routes/childs.route");
const groupsRoute = require("./routes/groups.route");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", authRoute, childsRoute, groupsRoute);

app.listen(4000, () => console.log("Server running"));
