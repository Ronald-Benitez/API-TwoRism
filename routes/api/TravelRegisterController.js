const router = require("express").Router();
const { Travel, TravelRegister } = require("../../db");

router.get("/:UserId", async (req, res) => {
  try {
    const travels = await TravelRegister.findAll({
      where: {
        UserId: req.params.UserId,
      },
      include: [Travel],
    });
    res.status(200).json(travels);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.get("/simplify/:UserId", async (req, res) => {
  try {
    const travels = await TravelRegister.findAll({
      attributes: ["TravelRegisterId"],
      where: {
        UserId: req.params.UserId,
      },
      include: [
        {
          model: Travel,
          attributes: [
            "TravelId",
            "TravelDate",
            "TravelOrigin",
            "TravelDestination",
            "TravelPrice",
          ],
        },
      ],
    });
    res.status(200).json(travels);
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.post("/", async (req, res) => {
  try {
    const travelId = req.body.TravelId;
    const register = await Travel.findOne({
      where: {
        TravelId: travelId,
      },
    });

    if (register.TravelCapacity > register.TravelRegistered) {
      register.TravelRegistered = register.TravelRegistered + 1;
      const travel = await TravelRegister.create(req.body);
      await register.save();
      res.status(201).json(travel);
    } else {
      res.status(401).json({ message: "No hay cupo" });
    }
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.delete("/:TravelRegisterId", async (req, res) => {
  try {
    const travel = await TravelRegister.destroy({
      where: {
        TravelRegisterId: req.params.TravelRegisterId,
      },
    });
    res.status(200).json(travel);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

module.exports = router;
