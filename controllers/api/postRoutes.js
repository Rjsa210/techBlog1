const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     const postData = await Post.findall({
      

//     })
//   }
// })
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({
      title: req.body.title,
      content: req.body.content,
      creator_id: req.session.user_id,
    });
    console.log(newPost)
    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});




module.exports = router;