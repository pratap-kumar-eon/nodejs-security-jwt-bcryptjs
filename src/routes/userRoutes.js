const express = require("express");
const verifyToken = require("../middlewares/authMiddleware")
const roleWise =  require("../middlewares/roleMiddleware")
const router = express.Router();

router.get("/admin",verifyToken,roleWise("admin"),(req,res)=>{
    return res.status(200).json({message:"Welcome Admin"})
})

router.get("/manager",verifyToken,roleWise("admin","manager"),(req,res)=>{
    return res.status(200).json({message:"Welcome Manager"})
})

router.get("/user",verifyToken,roleWise("admin","manager","user"),(req,res)=>{
    return res.status(200).json({message:"Welcome User"})
})
module.exports=router;