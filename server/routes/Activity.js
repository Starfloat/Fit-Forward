const express = require("express");
const router = express.Router();
const moment = require("moment");

const { ActivitySession, sequelize } = require("../models");

const { validateToken } = require("../middleware/Authentication");

const Op = require("sequelize").Op;
const TODAY_START = new Date().setHours(0, 0, 0, 0);
const NOW = new Date();

router.get("/", validateToken, async (req, res) => {
  const activityList = await ActivitySession.findAll({
    where: {
      UserId: req.user.id,
      createdAt: { [Op.gte]: TODAY_START },
    },
  });
  res.json({ activities: activityList });
});

router.post("/", validateToken, async (req, res) => {
  const addActivity = req.body;
  await ActivitySession.create(addActivity);
  res.json(addActivity);
});

module.exports = router;
