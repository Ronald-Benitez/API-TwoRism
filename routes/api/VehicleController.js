const router = require("express").Router();
const { Vehicles } = require("../../db");

router.post("/", async (req, res) => {
  try {
    const vehicle = await Vehicles.create(req.body);
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.get("/:UserId", async (req, res) => {
  try {
    const vehicle = await Vehicles.findAll({
      where: {
        UserId: req.params.UserId,
      },
    });
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.delete("/:VehicleId", async (req, res) => {
  try {
    const vehicle = await Vehicles.destroy({
      where: {
        VehicleId: req.params.VehicleId,
      },
    });
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.put("/:VehicleId", async (req, res) => {
  try {
    const vehicle = await Vehicles.update(req.body, {
      where: {
        VehicleId: req.params.VehicleId,
      },
    });
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.get("/ById/:VehicleId", async (req, res) => {
  try {
    const vehicle = await Vehicles.findOne({
      where: {
        VehicleId: req.params.VehicleId,
      },
    });
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

module.exports = router;
