const router = require("express").Router();
const { Travel } = require("../../db");
const { Vehicles } = require("../../db");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    const travels = await Travel.findAll({
      order: [["TravelDate", "DESC"]],
      include: [Vehicles],
    });
    res.status(200).json(travels);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.get("/simplify", async (req, res) => {
  try {
    const travels = await Travel.findAll({
      attributes: [
        "TravelId",
        "TravelDate",
        "TravelOrigin",
        "TravelDestination",
        "TravelPrice",
      ],
      order: [["TravelDate", "DESC"]],
    });
    res.status(200).json(travels);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.get("/simplify/ByUserId/:UserId", async (req, res) => {
  try {
    const travels = await Travel.findAll({
      where: {
        UserId: req.params.UserId,
      },
      attributes: [
        "TravelId",
        "TravelDate",
        "TravelOrigin",
        "TravelDestination",
        "TravelPrice",
      ],
      order: [["TravelDate", "DESC"]],
    });
    res.status(200).json(travels);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.get("/ByUser/:UserId", async (req, res) => {
  try {
    const travels = await Travel.findAll({
      where: {
        UserId: req.params.UserId,
      },
      order: [["TravelDate", "DESC"]],
      include: [Vehicles],
    });
    res.status(200).json(travels);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.get("/:TravelId", async (req, res) => {
  try {
    const travel = await Travel.findOne({
      where: {
        TravelId: req.params.TravelId,
      },
      include: [Vehicles],
    });
    res.status(200).json(travel);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.post("/", async (req, res) => {
  try {
    const travel = await Travel.create(req.body);
    res.status(201).json(travel);
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.put("/:TravelId", async (req, res) => {
  try {
    const travel = await Travel.update(req.body, {
      where: {
        TravelId: req.params.TravelId,
      },
    });
    res.status(200).json(travel);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.delete("/:TravelId", async (req, res) => {
  try {
    const travel = await Travel.destroy({
      where: {
        TravelId: req.params.TravelId,
      },
    });
    res.status(200).json(travel);
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.post("/filter", async (req, res) => {
  try {
    const travels = await Travel.findAll({
      where: {
        [req.body.filter]: {
          [Op.like]: "%" + req.body.value + "%",
        },
      },
      attributes: [
        "TravelId",
        "TravelDate",
        "TravelOrigin",
        "TravelDestination",
        "TravelPrice",
      ],
      order: [["TravelDate", "DESC"]],
    });
    res.status(200).json(travels);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

module.exports = router;
