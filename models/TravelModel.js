module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Travel", {
    TravelId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    VehicleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TravelDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    TravelTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TravelPrice: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TravelCapacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TravelRegistered: {
      type: DataTypes.INTEGER,
    },
    TravelOrigin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TravelDestination: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    TravelLatitudes: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    TravelLongitudes: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    TravelTags: {
      type: DataTypes.STRING(1000),
    },
    TravelIncludes: {
      type: DataTypes.STRING,
    },
    TravelExcludes: {
      type: DataTypes.STRING,
    },
  });
};
