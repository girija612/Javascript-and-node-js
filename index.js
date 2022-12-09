const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = 3000;

// to get info we use bodyparser and convert encoded data
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  // contains data
  var age = Number(req.body.n) / 15;
  res.send("<h2>Your dog age is : " + age + " dog years </h2>");
});

app.listen(port);
