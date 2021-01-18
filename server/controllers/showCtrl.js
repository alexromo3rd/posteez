const data = require('../../data.json');
let id = data.length + 1;

module.exports = {
  getPostIts: function(req, res) {
    res.status(200).send(data);
  },
  createPostIt: function(req, res) {
    const { title, description, category } = req.body;
    const postIt = {
      id: id,
      title,
      description,
      category
    };

    id++;
    data.push(postIt);
    res.status(200).send(data);
  },
  updatePostIt: function(req, res) {
    const { title, description, category } = req.body;
    const { id } = req.params;
    const index = data.findIndex(element => element.id === +id);

    if(index === -1) {
      res.status(404).send('Post-it not found.');
    }

    const updatedPostIt = {
      id: data[index].id,
      title: title || data[index].title,
      description: description || data[index].description,
      category: category || data[index].category
    };

    data[index] = updatedPostIt;
    res.status(200).send(data);
  },
  deletePostIt: function(req, res) {
    const { id } = req.params;
    const index = data.findIndex(element => element.id === +id);

    if (index === -1) {
      res.status(404).send('User not found');
    } else {
      data.splice(index, 1);
      res.status(200).send(data);
    }
  }
}