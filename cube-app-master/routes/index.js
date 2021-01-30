var express = require('express');
var router = express.Router();
const Cube = require('../models/cube');

/* GET home page. */
router.get('/', function(req, res, next) {
  Cube.find()
    .then((response) => {
      console.log('all the cubes are ', response)
      res.render('index', { title: 'Express Now With Mongo', cube: response });
    })
  
});


module.exports = router;
