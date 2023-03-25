
const jwt=require("jsonwebtoken");
const User = require("../modules/user.model");

module.exports=async(req,res,next)=>{
    try {
        const {authorization} = req.headers;
        if(authorization){
                  const token=authorization.replace("Bearer ","")
                  const decode=jwt.verify(token,"key");
                  const user=await User.findOne({_id:decode._id})
                  if(!user){
                    return res.json("not logged in")
                  }
                  else{
                    req.user =user;
                    next();
                  }
        }
        else{
            res.json({msg:"You are not authenticated",error:e})
        }
        
    } catch (e) {
        res.json({msg:"You are not authenticated",error:e})
    }
}