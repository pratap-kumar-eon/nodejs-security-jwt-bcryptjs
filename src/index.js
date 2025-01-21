const express = require("express");
const dbConn = require("./config/db.js")
const dotenv = require('dotenv').config()
const authRoutes = require("./routes/authRoutes.js")
const userRoutes =  require("./routes/userRoutes.js")
const app = express();
const PORT = process.env.PORT || 7002

// db connection
dbConn();

//middlewares
app.use(express.json())
// routes
app.use("/api/auth",authRoutes)
app.use("/api/users",userRoutes)

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})