"use strict";
const express = require("express");
const app = express();
//const port = express.env.PORT || 5000;
const port = 5000;

// Public static folder
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello to Eshop");
});

// Starting the web server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
