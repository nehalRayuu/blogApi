const {Schema,model} = require("mongoose");
const BlogSchema = new Schema({
    title:{required:true,type:String},
    description:{required:true,type:String},
    catagory:{required:true,type:String},
    date:{default:Date.now(),type:String},
    put:{type:Boolean,default:false},
    deleted:{type:Boolean,default:false},
    user:{type:Schema.Types.ObjectId,ref:"user"}

})
const Blog=model("blog",BlogSchema);
module.exports=Blog;