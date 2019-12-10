const AuthorModel = require("./../database/models/author_model");

async function create(req, res) {
    //logic for creating a resource
    let {name, bio, gender} = req.body;
    let author = await AuthorModel.create({ name, bio, gender })
        .catch(err => res.status(500).send(err));

    res.redirect("/authors");
}

async function index(req, res) {
    //showed a list of all the resources
    let authors = await AuthorModel.find();
    res.render("author/index", {authors});
}

function make(req, res) {
    //shows the form to create the resource
    res.render("author/new");
}

async function show(req, res) {
    let { id } = req.params; //find the id
    let author = await AuthorModel.findById(id); //find the author
    res.render("author/show", { author }) //render content
}

async function destroy(req, res) {
    let { id } = req.params;
    await AuthorModel.findByIdAndRemove(id);

    res.redirect("/authors");
}


// Logic for showing the form for editing an author
async function edit (req, res) {
    let { id } = req.params // Destructure off the id off req.params
    let author = await AuthorModel.findById(id) // query the DB for the author by ID
    res.render('author/edit', { author }) // Pass that author through to 'authors/edit'
  }
  
  // The logic for updating by ID
  async function update (req, res) {
    let { name, bio, gender } = req.body // Destructure name, bio and gender off req.body
    console.log(req.params)
    let { id } = req.params // Destructure off the id off req.params
    await AuthorModel.findByIdAndUpdate(id, { name, bio, gender }) // Update the author. Find by the id and then update with the new name, bio and gender
    res.redirect(`/authors/${id}`) // Redirect to the show page for author we just updated
  }

// async function update(req, res) {
//     let { name, bio, gender } = req.body;
//     let { id } = req.params;

//     await AuthorModel.findByIdAndUpdate(id, { name, bio, gender });
//     res.redirect(`/authors/${id}`);
// }

// async function edit(req, res) {
//     let { id } = req.params;
//     const author = await AuthorModel.findById(id);
//     res.render("author/edit", { author })
// }

module.exports = {
    create,
    index,
    make,
    show,
    destroy,
    update,
    edit
}