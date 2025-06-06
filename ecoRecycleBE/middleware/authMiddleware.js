const jwt = require('jsonwebtoken');

const { UserModel } = require('../models/user.model');

require('dotenv').config();

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await UserModel.findById(decoded.id).select("-password");
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token failed" });
  }
};

module.exports = {auth} ;
