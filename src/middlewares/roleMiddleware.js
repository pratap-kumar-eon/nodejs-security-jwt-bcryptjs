const roleWise = (...allowedRole)=>{
    return (req,res,next)=>{
        if(!allowedRole.includes(req.user.role)){
            return res.status(403).json({Message:"Access Denied"})
        }
        next()
    }
}

module.exports = roleWise;