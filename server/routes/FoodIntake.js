const express = require("express");
const router = express.Router();
const { FoodIntake } = require("../models");

const { validateToken } = require("../middleware/Authentication");

router.get("/", validateToken, async (req, res) => {
  const listOfFoodIntake = await FoodIntake.findAll({
    where: { UserId: req.user.id },
  });
  res.json({ foods: listOfFoodIntake });
});

router.post("/", validateToken, async (req, res) => {
  const addFood = req.body;
  await FoodIntake.create(addFood);
  res.json(addFood);
});

router.delete("/", validateToken, async (req, res) => {
  const foodIntakeId = req.foodIntakeId;
  await FoodIntake.destroy({
    where: {
      id: foodIntakeId,
    },
  });
  res.json("Delete successful");
});

module.exports = router;
