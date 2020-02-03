var {mongoose} = require('../db/mongoose');
var {Todo} = require('../models/todo');

var newTodo = new Todo({
    // text: 'Cooked dinner',
    // completed: true
    user: 'laduke',
    email: 'swaggmike'
});

module.exports = {newTodo};