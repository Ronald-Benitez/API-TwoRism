const router = require("express").Router();
const ApiTravelRoute = require("./api/TravelRoute");
const ApiUsersRoute = require("./api/UserRoute");
const ApiVehiclesRoute = require("./api/VehicleRoute");

router.use("/travels", ApiTravelRoute);
router.use("/users", ApiUsersRoute);
router.use("/vehicles", ApiVehiclesRoute);

module.exports = router;
