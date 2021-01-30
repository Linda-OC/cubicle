var express = require('express');
var router = express.Router();
const Accessory = require('../models/accessory')
const Cube = require('../models/cube');


/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id = req.params.id;
  Cube.findOne({_id: id}).populate('accessories')
    .then((results) => {
      console.log("The single cube results are ", results)
      console.log("the accessories are ", results.accessories)
      res.render('updatedDetailsPage', {cube: results, accessories: results.accessories})
    } )

  

  
  //console.log("the db cube is ", cube.find({}))
  console.log("the id is ", id)
//  res.send('respond with a resource');
});

module.exports = router;
