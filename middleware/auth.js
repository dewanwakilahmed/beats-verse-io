const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get Token from Header
  const token = req.header("x-auth-token");

  // Check if Token is send
  if (!token) {
    return res
      .status(401)
      .json({ msg: "No Token Provided. Authorization Denied!" });
  }

  // Verify Token
  try {
    const decodedToken = jwt.verify(token, config.get("jwtSecret"));
    req.user = decodedToken.user;
    next();
  } catch (error) {
    console.error(error.message);
    res.status(401).json({ msg: "Provided Token is not Valid!" });
  }
};
