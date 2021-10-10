module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    targetWeight: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    Users.hasMany(models.FoodIntake, {
      onDelete: "cascade",
    });
  };

  return Users;
};
