const express = require("express");
const router = express.Router();
const CommentController = require("../controllers/comment_controller");

// Comment Routes
router.post("/:bookId", CommentController.create)

module.exports = router;