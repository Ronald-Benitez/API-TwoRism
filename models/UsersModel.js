module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Users", {
    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    UserName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UserPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UserEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UserVerified: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    UserType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
