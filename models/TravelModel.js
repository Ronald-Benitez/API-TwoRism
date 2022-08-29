module.exports = (sequelize, DataTypes) => {
return sequelize.define("Travel", {
    TravelId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    TravelDate: {
        type: DataTypes.STRING,
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
    TravelOrigin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TravelDestination: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TravelIncludes: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    TravelExcludes: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
}