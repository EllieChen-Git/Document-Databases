const express = require("express");
const router = express.Router();
const authorRoutes = require("./author_routes");
const bookRoutes = require("./book_routes");
const commentRoutes = require("./comment_routes");

router.use("/authors", authorRoutes);
router.use("/books", bookRoutes);
router.use("/comments", commentRoutes);

module.exports = router;