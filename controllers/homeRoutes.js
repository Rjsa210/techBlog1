const { Post, User } = require('../models');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    //get all posts and include creator
    const postData = await Post.findAll({
      // include: [
      //   {
      //     model: User, 
      //     attributes: ['username'],
      //   },
      // ],
    });

    const posts = postData.map((post) => post.get({ plain: true}));
    res.render('homepage', {
      posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/dashboard', (req, res) => {
  try {
    res.render('dashboard')
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;