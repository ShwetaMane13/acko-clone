const express = require("express");
const router = express.Router();
const db = require("../database/connection");
const User = require("../models/userSchema");

// Middleware
const middleware = (req, res, next) => {
  console.log("Hello middleware");
  next();
};

router.get("/", (req, res) => {
  res.send("Hello world from router server...");
});

router.post("/user/register", (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(422).json({ error: "please fill the feild properly" });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "email already exist" });
      }
      const user = new User({ name, email, phone, password });
      user
        .save()
        .then(() => {
          return res
            .status(201)
            .json({ message: "user registered successfuly" });
        })
        .catch(() => {
          return res.status(500).json({ error: "failed to register" });
        });
    })
    .catch((error) => {
      return res.status(500).json({ error });
    });
});

module.exports = router;
