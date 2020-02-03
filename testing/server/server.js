// const express = require('express');

// const app = express();

// app.get('/', ( req,res ) => {
//     res.send('Hello World');
// })

// app.listen(3000);

// module.exports.app = app;

var express = require('express');

var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');

var {Todo} = require('./models/todo');

var {user} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todo', (req,res) => {
  console.log(req.body);
});

app.listen(4000,() => {
    console.log('started on port 4000');
});



