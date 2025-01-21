const express = require("express");
const dbConn = require("./config/db.js")
const dotenv = require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 7002

// db connection
dbConn();

//middlewares
app.use(express.json())
// routes

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})