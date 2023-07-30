const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

//Routes imports
const { authRouter } = require("./src/routes/auth");

//Middlewares
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(helmet());
}

//Default Route
app.get("/", (req, res) => {
  res.json({
    message: "Awesome! It's working 😎".yellow.bold,
  });
});

//Routes Registration

app.use("/api/auth", authRouter);

module.exports = {
  app,
};
