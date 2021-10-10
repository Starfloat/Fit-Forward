const express = require("express");
const router = express.Router();
const { FoodIntake } = require("../models");

router.get("/", (req, res) => {
  res.send("Hello world");
});

router.post("/", async (req, res) => {
  const post = req.body;
  await FoodIntake.create(post);
  res.json(post);
});

module.exports = router;
