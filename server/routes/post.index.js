const express = require('express');
const getPost = require('../controller/post.controller')
const router = express.Router();

router.get("/", getPost.getPost);
router.post("/", getPost.postPost);
router.put("/:id", getPost.updatepost);

module.exports = router
