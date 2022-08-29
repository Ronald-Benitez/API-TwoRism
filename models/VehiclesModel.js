module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Vehicles", {
    VehicleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    VehicleTuition: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    VehicleType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    VehicleCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
