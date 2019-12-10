const express = require("express");
const router = express.Router();
const AuthorController = require("./../controllers/author_controller");

router.get("/", AuthorController.index);

router.post("/", AuthorController.create);

router.get("/new", AuthorController.make);

// GET route to show an author
router.get("/:id", AuthorController.show);

// DELETE route to delete an author
router.delete("/:id", AuthorController.destroy);

// GET route to edit (form)
router.get("/:id/edit", AuthorController.edit)

// PATCH route to update
router.patch("/:id", AuthorController.update)

// PUT route to update
router.put("/:id", AuthorController.update)

module.exports = router;