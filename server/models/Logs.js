module.exports = (sequelize, DataTypes) => {
  const Logs = sequelize.define("Logs", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    foodIntake_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activitiySession_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Logs;
};
