module.exports = {
  getPostIts: function(req, res) {
    res.status(200).send('Show all post-its!');
  },
  createPostIt: function(req, res) {
    const { title, description } = req.body;
    const postIt = {
      title,
      description
    };

    res.status(200).send(postIt);
  },
  updatePostIt: function(req, res) {
    res.status(200).send('Update post-it');
  },
  deletePostIt: function(req, res) {
    res.status(200).send('Delete post-it!');
  }
}