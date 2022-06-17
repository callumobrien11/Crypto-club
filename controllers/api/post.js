const User = require("../../models/User");
const Post = require("../../models/Post");

module.exports = {
  create,
  index,
};

async function create(req, res) {
  console.log(req.body);
  console.log(req.user)
  const post = await Post.create({
    title: req.body.title,
    content: req.body.content,
    catagory: req.body.catagory,
    createdBy: req.user._id
  });
  res.status(200).json("Created ok.");
}

async function index(req, res) {
    try {
        let posts = await Post.find({}).sort("-createdAt").populate('createdBy')
        console.log(posts)
        res.status(200).json(posts)

    } catch(err) {
        res.status(400).json(err)
        console.log(err)
    }
}
