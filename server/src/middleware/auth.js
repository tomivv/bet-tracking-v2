const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  try {
    jwt.verify(req.headers.api_key, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({
      data: {
        statusCode: 401,
        message: "error authenticating"
      }
    });
  }
}

module.exports = {
  verifyToken: verifyToken
}