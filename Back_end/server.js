const express = require("express");
const cors = require("cors");
require("dotenv").config();
const Mrouter = require("./src/routes/movie");  //Router
require("./src/db/conn");  //database
const port = process.env.PORT || 8080;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route ...
app.use("/api", Mrouter);

// Server Listening..
app.listen(port, "127.0.0.1", () => console.log("Listening....."));
