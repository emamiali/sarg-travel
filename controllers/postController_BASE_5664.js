var db = require('../models');

function index(req, res) {
  db.Post.find({}, function(err, allPosts) {
    res.json(allPosts);
  });
}


module.exports = {
  index:index
  // show:show,
  // create:create,
  // destroy: destroy,
  // update: update
};