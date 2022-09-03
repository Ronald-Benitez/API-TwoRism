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
  // const users = await Users.findAll();
  // res.status(200).json(users);
  res.send("He Vegeta!");
});

module.exports = router;
