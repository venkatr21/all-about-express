const router = require('express').Router();
let User = require('../models/user.model');
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add',(req, res) => {
    const username = req.body.username;
    const age = req.body.age;
    const email = req.body.email;
    const newUser = new User({username: username, age:age, email: email});

    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;