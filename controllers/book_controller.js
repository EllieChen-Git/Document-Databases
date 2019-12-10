const BookModel = require("./../database/models/book_model");

async function create(req, res) {
    //logic for creating a resource
    let {name} = req.body;
    let book = await BookModel.create({ name })
        .catch(err => res.status(500).send(err));

    res.redirect("/books");
}

async function index(req, res) {
    //showed a list of all the resources
    let books = await BookModel.find();
    res.render("book/index", {books});
}

async function make(req, res) {
    //shows the form to create the resource
    let authors = await AuthorModel.find().select("_id name");
    res.render("book/new", { authors });
}

async function show(req, res) {
    let { id } = req.params; //find the id
    let book = await BookModel.findById(id).populate("author");
    console.log(book);
    res.render("book/show", { book }) //render content
}

async function destroy(req, res) {
    let { id } = req.params;
    await BookModel.findByIdAndRemove(id);

    res.redirect("/books");
}


// Logic for showing the form for editing an book
async function edit (req, res) {
    let { id } = req.params // Destructure off the id off req.params
    let book = await BookModel.findById(id) // query the DB for the book by ID
    res.render('book/edit', { book }) // Pass that book through to 'books/edit'
  }
  
  // The logic for updating by ID
  async function update (req, res) {
    let { name } = req.body // Destructure name, bio and gender off req.body
    console.log(req.params)
    let { id } = req.params // Destructure off the id off req.params
    await BookModel.findByIdAndUpdate(id, { name }) // Update the book. Find by the id and then update with the new name, bio and gender
    res.redirect(`/books/${id}`) // Redirect to the show page for book we just updated
  }

module.exports = {
    create,
    index,
    make,
    show,
    destroy,
    update,
    edit
}