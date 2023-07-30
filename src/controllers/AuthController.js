const { generateToken } = require("../utils/jwt.utils");
const { User } = require("../database/models");

const login = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({
    raw: true,
    where: {
      email: email,
      password: password,
    },
  });

  if (user) {
    let token = generateToken(user);
    user.token = token;
    delete user.password;

    return res.status(200).json(user);
  } else {
    return res.status(401).json(null);
  }
};

module.exports = {
  login,
};
