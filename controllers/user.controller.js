const User = require("../modules/user.model")
const bcrypt = require('bcryptjs');
const jwt=require("jsonwebtoken");
var salt = bcrypt.genSaltSync(10);

module.exports.createUser=async (req,res,next)=>{
  const {name,email,password,number} =  req.body;
  // console.log(req.body)
  try{
    if(!name | !email | !password |!number){
      return res.status(202).json({msg:"fill the details"})
    }
    const checkEmail=await User.findOne({email})
    if(checkEmail){
      return res.status(202).json({msg:"Email alredy exists"})
    }
    const hashPassword =await bcrypt.hashSync(password , salt);
    // console.log(password)
    const user = await User.create({...req.body ,password:hashPassword});
    // const user = await User.create(req.body);
    return res.status(200).json(user)
  }
  catch(e){
   next(e); 
  }
 
   
};
module.exports.loginUser = async(req,res,next)=>{
  const {email,password} = req.body;
  // console.log(req.body);

  if(!email | !password){
    return res.json("fill correct details");
  }
  const checkEmail = await User.findOne({email});
  if(!checkEmail){
    return res.status(202).json({msg:"user doesn't exits "});
  }
  
  let compPass = bcrypt.compareSync(password , checkEmail.password);
  if(!compPass){
    return res.status(202).json({msg: "invalid"});
  }
  let token = jwt.sign({_id : checkEmail.id},"key")
  // return res.status(202).json({msg:"succ"});
  return res.json({msg:"logged in"});

}
module.exports.findAllUser =async(req,res,next)=>{
    User.find()
    .then((r)=>{
      return res.json(r);
    })
    .catch((r)=>{
      next(e);
    })
  }
  module.exports.findUser =async(req,res,next)=>{
      const {id} = req.params;
      User.findOne({_id : id}).populate("blogs").then((r)=>{
        return res.json(r)
      })
      .catch((e)=>next(e));
  }