var  mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/TodoApp';



mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;

module.exports = {mongoose};