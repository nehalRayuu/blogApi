const express=require("express");
const { createUser, loginUser, findAllUser, findUser } = require("../controllers/user.controller");
const router= express.Router();
router.post("/signup",createUser);
router.post("/login",loginUser);
router.get("/",findAllUser);
router.get("/:id",findUser);
module.exports=router;