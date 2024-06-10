"use strict";
const express = require("express");
const app = express();
//const port = express.env.PORT || 5000;
const port = 5000;
const expressHandlebars = require("express-handlebars");

// Public static folder
app.use(express.static(__dirname + "/public"));

// Express-handlebars
app.engine(
  "hbs",
  expressHandlebars.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
    defaultLayout: "layout",
  })
);
app.set("view engine", "hbs");
// routes
app.get("/", (req, res) => {
  res.render("index");
});

// Starting the web server
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
