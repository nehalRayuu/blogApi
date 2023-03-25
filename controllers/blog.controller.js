
const Blog = require("../modules/blog.model");
const User = require("../modules/user.model");
module.exports.createBlog=async(req,res,next)=>{
    try {
         const {title,description,catagory}=req.body;
         if(!title | !description |!catagory){
             return res.status(202).json({msg:"fill the details correctly"})
         }
        let blog =await Blog.create(req.body)
            //    let updatedUser = await User.updateOne({_id : req.body.User},{$push:{blogs:blog._id}})
            return res.status(200).json(blog);
       
    } catch (error) {
             next(error);  
    }
}
module.exports.getBlogs = (req,res,next)=>{
     
      const {_page,_limit} =req.query; 
      const currPage=Number(_page) || 1;
      const skip=_limit*currPage;
    try {
         console.log("user");
        // console.log(user);

                Blog.find().limit(_limit).skip(skip)
                .then((e)=>{
                 return res.status(200).json(e);
                })
       } catch (error) {
                 next(error);
       }
}
module.exports.getBlog =(req,res,next)=>{
    try {
        const {id}= req.params;
          Blog.find({_id: id})
          .then((e)=>{
            return res.status(200).json(e);
          })
          .catch((r)=>{
            next(r);
          })
    } catch (error) {
           next(error);
    }
}

module.exports.updateBlog =(req,res,next)=>{
    try {
          const { id } = req.params;
          Blog.findByIdAndUpdate(id,req.body)
          .then((e)=>{
            res.status(200).json(e)
          })
          .catch((r)=>{
                  next(r);
          })
    } catch (error) {
        
    }
}

module.exports.deleteBlog=(req,res,next)=>{
    const id = req.params;
    try {
        Blog.findByIdAndUpdate(id,{deleted:true})
        .then(()=>{
            res.json("deleted succ");
        })
        .catch((e)=>next(e));
    } catch (error) {
        next(error);
    }
}
module.exports.getDeletedBlog=(req,res,next)=>{
    try {
        Blog.find({deleted:true})
        .then((r)=>{
                     res.status(200).json(r);
        })
        .catch((e)=>{
            next(e);
        })
    } catch (error) {
        next(error);
    }
}