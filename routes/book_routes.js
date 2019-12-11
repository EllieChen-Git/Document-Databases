const express = require("express");
const router = express.Router();
const BookController = require("../controllers/book_controller");
// const CommentController = require("../controllers/comment_controller");

router.get("/", BookController.index);

router.post("/", BookController.create);

router.get("/new", BookController.make);

// GET route to show an author
router.get("/:id", BookController.show);

// DELETE route to delete an author
router.delete("/:id", BookController.destroy);

// GET route to edit (form)
router.get("/:id/edit", BookController.edit)

// PATCH route to update
router.patch("/:id", BookController.update)

// PUT route to update
router.put("/:id", BookController.update)


module.exports = router;