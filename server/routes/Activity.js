const express = require("express");
const router = express.Router();
const { ActivitySession } = require("../models");

const { validateToken } = require("../middleware/Authentication");

router.get("/", validateToken, async (req, res) => {
  const activityList = await ActivitySession.findAll({
    where: { UserId: req.user.id },
  });
  res.json({ activities: activityList });
});

router.post("/", validateToken, async (req, res) => {
  const addActivity = req.body;
  await ActivitySession.create(addActivity);
  res.json(addActivity);
});

module.exports = router;
