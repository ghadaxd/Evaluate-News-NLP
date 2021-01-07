const dotenv = require("dotenv");
dotenv.config();

// process.env.API_KEY

var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

const app = express();

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

// app.use(express.static("dist"));
app.use(express.static(path.resolve("src/client")));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile("dist/index.html");
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Listening on port 8080!");
});

app.get("/feelings", function (req, res) {
  res.send(mockAPIResponse);
});
