const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../models/User");

async function login(req, res) {
  const user = await User.query()
    .select("username", "password")
    .where("username", req.body.username);
  
  // user not found
  if (user.length < 1 || user.length > 1) {
    return res.status(401).json({
      data: {
        statusCode: 401,
        message: "Invalid username or password"
      }
    });
  };

  if (bcrypt.compareSync(req.body.password, user[0].password)) {
    const token = jwt.sign(
      {
        user_id: user[0].username,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    return res.status(200).json(
      {
        data: {
          statusCode: 200,
          token: token,
          refreshToken: token
        }
      }
    );
  } else {
    return res.status(401).json({
      data: {
        statusCode: 401,
        message: "Invalid username or password"
      }
    });
  }
}

module.exports = {
  login: login,
}