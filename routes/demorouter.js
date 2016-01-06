var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// respond with "hello world" when a GET request is made to the homepage
// define the home page route
router.get('/', function(req, res) {
  res.send('my home page');
  console.log('homepage called');
});

// define the about route
router.get('/about', function(req, res) {
  res.send('About page');
   console.log('About page called');
});

// define the about route
router.get('/api', function(req, res) {
  res.send('api page ');
 	console.log('Api page called');

});


module.exports = router;
