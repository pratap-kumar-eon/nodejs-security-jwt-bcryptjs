const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role :{
        type:String,
        enum:["admin","manager","user"],
    },
},{timestamps:true}
)

const userModel = mongoose.model("role",userSchema)

module.exports = userModel;