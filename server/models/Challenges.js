module.exports = (sequelize, DataTypes) => {
  const Challenges = sequelize.define("Challenges", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    challengeName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    challengeDescription: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    startsIn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });

  return Challenges;
};
