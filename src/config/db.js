const mongoose = require("mongoose");

const dbConn = async () => {
  const conn = await mongoose.connect("mongodb+srv://pratapnayakdev:<password>@cluster0.kehl6.mongodb.net/user-roles-jwt");
  try {
    if (conn) {
      console.log("DB Connected");
    }
  } catch (err) {
    console.log("Error", err);
  }
}

module.exports=dbConn;
