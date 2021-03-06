const dotenv = require("dotenv");
dotenv.config();

// var path = require("path");
const express = require("express");
const getSentimentsAnalysis = require("./fetchSentiments.js");

const app = express();

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

app.use(express.static("dist"));
// app.use(express.static(path.resolve("src/client")));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
  // res.sendFile(path.resolve("src/client/views/index.html"));
});

app.get("/sentiments/:txt?", function (req, res) {
  getSentimentsAnalysis(req.query.txt).then((results) => {
    res.send(results);
  });
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Listening on port 8080 for localhost!");
});
