const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", (req, res) => {
  res.render("register/index", { user: new User() });
});

router.post("/", (req, res) => {
  const user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  });
  const newUser = user.save();
  res.redirect("/");
});

module.exports = router;
