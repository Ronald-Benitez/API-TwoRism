require("dotenv").config();
const express = require("express");
const cors = require("cors");
const ApiRouter = require("./routes/api");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", ApiRouter);

app.get("/", (req, res) => {
  res.send("He Vegeta!");
});

app
  .listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
  .on("error", (err) => {
    console.log(err);
  });
