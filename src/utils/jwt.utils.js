const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  const { id, email } = user;
  return jwt.sign(
    {
      email,
      id,
    },
    process.env.SECRET,
    {
      expiresIn: "30d",
    }
  );
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};
