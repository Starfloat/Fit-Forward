module.exports = (sequelize, DataTypes) => {
  const FoodIntake = sequelize.define("FoodIntake", {
    foodName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    protein: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    fat: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    carbohydrate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    calories: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    servingSize: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return FoodIntake;
};
