const dotenv = require("dotenv");
const express = require("express");
dotenv.config({ path: "./config.env" });
const db = require("./database/connection");

const app = express();
const PORT = process.env.PORT;

// Middleware
const middleware = (req, res, next) => {
  console.log("Hello middleware");
  next();
};

app.get("/", middleware, (req, res) => {
  res.send("This is home page");
});

app.get("/login", middleware, (req, res) => {
  res.send("This is login page");
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
