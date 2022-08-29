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

module.exports = router;
