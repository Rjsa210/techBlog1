const router = require('express').Router();
const { User } = require('../../models');


// signup
// WHY DOESN'T THIS WORK
router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.status(200).json(userData);
    });

  } catch (err) {
    console.log(req.body);
    res.status(400).json(err);
  }
});


router.post('/login', async (req, res) => {
  try{
    const userData = await User.findOne({where: { username: req.body.username}});
    if (!userData)  {
      res.status(400).json({message: 'incorrect username or email'})
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
})


module.exports = router;