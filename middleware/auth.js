const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // getting token from header
  const token = req.header("X-auth-token");
  // if token not found send error
  if (!token) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }
  // if found toke then verify the token
  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: " Invalid Token" });
  }
};
