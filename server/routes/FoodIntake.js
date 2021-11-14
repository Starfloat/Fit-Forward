const express = require("express");
const router = express.Router();
const { FoodIntake } = require("../models");

const { validateToken } = require("../middleware/Authentication");

router.get("/", validateToken, async (req, res) => {
  const listOfFoodIntake = await FoodIntake.findAll({
    where: { UserId: req.user.id },
  });
  res.json({ listOfFoodIntake: listOfFoodIntake });
});

router.post("/", validateToken, async (req, res) => {
  const addFood = req.body;
  await FoodIntake.create(addFood);
  res.json(addFood);
});

module.exports = router;
