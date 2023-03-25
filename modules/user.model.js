const {Schema,model}=require("mongoose");
// const blog = require("../modules/blog.model")
const UserSchema=new Schema({
    name:{required:true,type:String},
    email:{required:true,type:String},
    password:{required:true,type:String},
    number:{required:true,type:Number},
    blogs:[{type:Schema.Types.ObjectId,ref:"blog"}]
})
const User=model("user",UserSchema);
module.exports=User;