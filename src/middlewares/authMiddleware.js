const jwt = require("jsonwebtoken")
const verifyToken = (req,res,next)=>{
    let token;
    let authToken = req.headers.Authorization || req.headers.authorization;
    if(authToken && authToken.startsWith("Bearer")){
        token = authToken.split(" ")[1];
        console.log(process.env.JWT_SECRET)
        if(!token){
            return res.status(401).json({Messae:"No token , authorized denied"})
        }
        try {
            const decode = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decode)
            req.user = decode;
            console.log("your decoded user",req.user);
            next()
        } catch (error) {
            return res.status(401).json({Messae:"No token , authorized denied"})
        }
    }else{
        return res.status(401).json({Messae:"No token , authorized denied"})
    }      
}

module.exports=verifyToken