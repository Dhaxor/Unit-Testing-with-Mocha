 var {mongoose} = require('../db/mongoose');

var Todo = mongoose.model('Todo',{
    user:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minLength: 1

    }
});

module.exports = {Todo};