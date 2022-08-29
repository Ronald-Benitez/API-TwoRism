const Sequelize = require("sequelize");
require("dotenv").config();
const TravelModel = require("./models/TravelModel");
const UsersModel = require("./models/UsersModel");
const VehiclesModel = require("./models/VehiclesModel");
const TravelRegisterModel = require("./models/TravelRegisterModel");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

const Travel = TravelModel(sequelize, Sequelize);
const Users = UsersModel(sequelize, Sequelize);
const Vehicles = VehiclesModel(sequelize, Sequelize);
const TravelRegister = TravelRegisterModel(sequelize, Sequelize);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = {
  Travel,
  Users,
  Vehicles,
  TravelRegister,
};
