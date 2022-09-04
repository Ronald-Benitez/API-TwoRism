const router = require("express").Router();
const { Users } = require("../../db");
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    req.body.UserPassword = bcrypt.hashSync(
      req.body.UserPassword,
      bcrypt.genSaltSync(10)
    );

    const user = await Users.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.put("/:UserId", async (req, res) => {
  try {
    req.body.UserPassword = bcrypt.hashSync(
      req.body.UserPassword,
      bcrypt.genSaltSync(10)
    );
    const user = await Users.update(req.body, {
      where: {
        UserId: req.params.UserId,
      },
    });
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        UserEmail: req.body.UserEmail,
      },
    });
    if (user) {
      const isPasswordValid = bcrypt.compareSync(
        req.body.UserPassword,
        user.UserPassword
      );
      if (isPasswordValid) {
        res.status(200).json(user);
      } else {
        res.status(401).json({ message: "Contraseña invalida" });
      }
    } else {
      res.status(401).json({ message: "Correo invalido" });
    }
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["UserId", "UserName", "UserEmail", "UserVerified"],
      where: {
        UserType: "Proveedor",
      },
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.get("/verified", async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["UserId", "UserName", "UserEmail", "UserVerified"],
      where: {
        UserType: "Proveedor",
        UserVerified: 1,
      },
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.get("/unverified", async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["UserId", "UserName", "UserEmail", "UserVerified"],
      where: {
        UserType: "Proveedor",
        UserVerified: 0,
      },
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.put("/verify/:UserId", async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        UserId: req.params.UserId,
      },
    });
    if (user) {
      if (user.UserVerified == 0) {
        user.UserVerified = 1;
      } else {
        user.UserVerified = 0;
      }
      await user.save();
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.post("/calification", async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        UserId: req.body.UserId,
      },
    });

    user.UserCalification += parseFloat(req.body.UserCalification);
    user.UserCalifications += 1;
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

router.get("/calification/:UserId", async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        UserId: req.params.UserId,
      },
    });
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(401).json({ message: "Datos invalidos" });
  }
});

module.exports = router;
