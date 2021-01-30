var express = require('express');
var router = express.Router();
const Cube = require('../models/cube');
const Accessory = require('../models/accessory');

/* GET Add Cube page. */
router.get('/', function(req, res, next) {
  console.log('add a cube')
  res.render('create', { title: 'Create a Cube ' });
});

router.post('/', function(req, res, next) {
  console.log("incoming form submission " , req.body);

    const newCube = new Cube({
    _id: Math.random(),
    name: req.body.name,
    description: req.body.description,
    image_url: req.body.imageUrl,
    level: req.body.difficultyLevel,
    });
    
    newCube.save()
    .then((result) => {
      console.log(result)
      res.send(result)
      })
      .catch((err) => {
        res.send(err)
      })

});

router.get('/accessory', function(req, res, next) {
  console.log('Create accessory');
  res.render('createAccessory', { title: 'Add Accessory'})
});

router.post('/accessory', function(req, res, next) {
  console.log("the accessory form is ", req.body)
  const newAcc = new Accessory({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl
  });
  newAcc.save()
    .then((res) => { console.log('the new accessory is ', res)})
})
module.exports = router;
