module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Users", {
    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true,
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
    UserCalification: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    UserCalifications: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  });
};
