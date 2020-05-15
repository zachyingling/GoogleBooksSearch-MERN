require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const path = require("path");
const app = express();
const routes = require("./routes/index");

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/booksdb");


if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // Uses react application when build
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "/client", "/build", "/index.html"));
  });
}

app.use(routes);

app.listen(PORT, () => {
  console.log("App running on port " + PORT + "!");
});