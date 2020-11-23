var express = require('express')
const router = express.Router();
const user = require('../models/user.model');
const count = require('../models/count.model');

router.route('/add/:uname').get((req, res) => {
  const username = req.params.uname;
  const newUser = new user({username: username});
  user.find({username: username},{$exists: false})
  .then(
  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))
  )
});

router.route('/fetch/:uname').get((req, res) => {
  var uname = req.params.uname;
  user.find({username: uname},{$exists: true})
  .then(doc => res.json(doc))
});



module.exports = router;