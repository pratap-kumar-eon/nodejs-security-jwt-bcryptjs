const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config()
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
  try {
    const { username, password } = req.body;
    console.log(username,password)
    const user = await userModel.findOne({username});
    console.log(user)
    if(!user){
      return res.status(404).json({Message:`User with ${username} not found`})
    }

    const isMatched = await bcrypt.compare(password,user.password);
    if(!isMatched){
      return res.status(400).json({Message:"Credentials doesn't match"})
    }

    const token = jwt.sign(
      {id:user._id,role:user.role},
      process.env.JWT_SECRET,
      {expiresIn:"1h"}
    )
    
    return res.status(200).json({token})
  } catch (error) {
   return res.status(500).json({Message:'Enter valid username and password'}); 
  }
};

module.exports = {
  register,
  login,
};
