const express = require("express");
const router = express.Router();

// Middleware
const middleware = (req, res, next) => {
  console.log("Hello middleware");
  next();
};

router.get("/", (req, res) => {
  res.send("Hello world from acko router server...");
});

router.post("/user/register", (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !email || !phone || !password) {
    return res.status(422).json({ error: "please fill the feild properly" });
  }
  res.status(200).json({ message: "saved" });
});

module.exports = router;
