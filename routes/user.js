var express = require('express')
const router = express.Router();
const user = require('../models/user.model');
const count = require('../models/count.model');

router.get('/add/:uname',async (req, res) => {
  const username = req.params.uname;
  const newUser = new user({username: username});
  user.find({username: username})
  .then(async (item)=>{
    if(item.length>0){
      try{
        const doc = await count.findOne({ username: username });
        var item = doc;
        item.count = item.count+1;
        console.log(item.count);
        doc.overwrite({ username: username, count: item.count });
        await doc.save();
        res.redirect('/user/fetch/'+username);
      }catch (e) {
        res.status(400).json({ msg: e.message });
      }    
    }else{
      try{
        const countObj = new count({username: username, count:1})
        const saverCount = await countObj.save();
        const saverUser = await newUser.save();
        if (!saverCount || !saverUser) throw Error('Something went wrong saving the user');
        res.status(200).json(saverCount);
      }catch (e) {
        res.status(400).json({ msg: e.message });
      }
    }
  })
  .catch(err => console.log(err));
  
});

router.route('/fetch/:uname').get((req, res) => {
  var uname = req.params.uname;
  count.find({username: uname})
  .then(item =>{
    res.send(item[0]);
  })
});
module.exports = router;