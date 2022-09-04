const router = require("express").Router();
const ApiTravelRoute = require("./api/TravelController");
const ApiUsersRoute = require("./api/UserController");
const ApiVehiclesRoute = require("./api/VehicleController");
const ApiTravelRegisterRoute = require("./api/TravelRegisterController");

router.use("/travels", ApiTravelRoute);
router.use("/users", ApiUsersRoute);
router.use("/vehicles", ApiVehiclesRoute);
router.use("/travelRegister", ApiTravelRegisterRoute);

module.exports = router;
