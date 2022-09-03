const router = require("express").Router();
const ApiTravelRoute = require("./api/TravelController");
const ApiUsersRoute = require("./api/UserController");
const ApiVehiclesRoute = require("./api/VehicleController");

router.use("/travels", ApiTravelRoute);
router.use("/users", ApiUsersRoute);
router.use("/vehicles", ApiVehiclesRoute);

module.exports = router;
