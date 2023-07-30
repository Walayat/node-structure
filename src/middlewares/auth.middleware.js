const asyncHandler = require("express-async-handler");
const { verifyToken } = require("../utils/jwt.utils");

const authentication = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = verifyToken(token);

      //verify user authenticity and map user to the req.user

      next();
    } catch (error) {
      console.error(`Error: ${error}`);
      res.status(401);
      throw new Error("Unauthorized, token is invalid.");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Unauthorized, token is missing.");
  }
});

module.exports = {
  authentication,
};
