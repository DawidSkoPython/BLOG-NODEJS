const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Middlewares
app.use("/posts", () => {
  console.log("This is a middleware running");
});

// ROUTES
//patch - updating
app.get("/", (req, res) => {
  res.send("We are on home");
});

app.get("/posts", (req, res) => {
  res.send("We are on home");
});

app.post("/", (req, res) => {
  res.send("We are on home");
});

// Connect to DB
mongoose.connect(
  "mongodb+srv://test:test@blogrest.zpcff.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useUnifiedTopology: true },
  () => {
    console.log("connected to DB!");
  }
);

app.listen(3000);
