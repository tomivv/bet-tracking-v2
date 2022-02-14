const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  try {
    jwt.verify(req.body.token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).json({
      statusCode: 401,
      message: "Error authenticating"
    });
  }
}