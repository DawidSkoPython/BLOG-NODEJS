const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const bodyParaser = require("body-parser");

require("dotenv/config");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Router
const postsRoute = require("./routes/posts");
//Middlewares
app.use("/posts", postsRoute);

// ROUTES
//patch - updating
app.get("/", (req, res) => {
  res.send("We are on home");
});

// app.get("/posts", (req, res) => {
//   res.send("We are on home");
// });

// app.post("/", (req, res) => {
//   res.send("We are on home");
// });

// Connect to DB
MongoClient.connect(
  process.env.DB_CONNECTION,
  { useUnifiedTopology: true },
  { useNewUrlParser: true },
  () => {
    console.log("connected to DB!");
  }
);

app.listen(3000);
