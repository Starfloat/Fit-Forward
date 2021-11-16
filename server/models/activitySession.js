module.exports = (sequelize, DataTypes) => {
  const activitySession = sequelize.define("ActivitySession", {
    compendium_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    activityName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minutesPerformed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mets: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    caloriesBurned: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });

  return activitySession;
};
