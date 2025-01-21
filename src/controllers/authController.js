const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    if (!username || !password || !role) {
      return res.status(400).json({ message: "All fields are mandatory" });
    }

    const hashedPassword = await bcrypt.hash(password, 15);
    const newUser = new userModel({
      username,
      password: hashedPassword,
      role,
    });

    newUser.save();
    return res.status(200).json({ Message: "User created" });
  } catch (err) {
    return res.status(500).json({ Message: "User not created" });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
};

module.exports = {
  register,
  login,
};
