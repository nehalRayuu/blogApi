const { createBlog, updateBlog, deleteBlog, getDeletedBlog, getBlog, getBlogs } = require('../controllers/blog.controller')

const router= require('express').Router()
router.post("/create",createBlog);
router.put("/:id",updateBlog);
router.put("/delete/:id",deleteBlog);
router.get("/trash",getDeletedBlog);
router.get("/:id",getBlog);
router.get("/",getBlogs);

module.exports= router;