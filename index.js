const express=require('express');
const app=express();
const conn=require('./db');
const auth = require("./middle/auth");

const userRouter=require("./routes/user.route");
const blogRouter=require("./routes/blog.route")
         


app.use(express.json());
app.get('/',(req,res)=>{
        res.send('welcome');
})





app.use("/user",auth,userRouter);

app.use("/blog",blogRouter)


app.listen(8081,async()=>{
        await conn;
        console.log('running');
})


// pass:vWo5Zv60lXuvUrF1   TL1pil2HCt6F9paO