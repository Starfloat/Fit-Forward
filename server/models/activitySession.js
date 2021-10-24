module.exports = (sequelize, DataTypes) => {
  const activitySession = sequelize.define("activitySession", {
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activityName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minutedPerformed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    caloriesBurned: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return activitySession;
};
