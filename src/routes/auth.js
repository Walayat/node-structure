const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/AuthController");

authRouter.post("/login", authController.login);

module.exports = {
  authRouter,
};
