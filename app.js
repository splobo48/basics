
var express = require('express');
var app = express();
var demorouter =require('./routes/demorouter');

// respond with "hello world" when a GET request is made to the homepage
//app.get('/', function(req, res) {
//  res.send('hello world');
//});

//Routes
app.use('/',demorouter);



// Start server
app.listen(3000);
console.log('API is running on port 3000');
