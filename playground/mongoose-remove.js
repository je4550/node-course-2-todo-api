const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
})

// Todo.findOneAndRemove
// Todo.findByIdAndRemove
Todo.findOneAndRemove({_id: '5b61d926c7ec6ad0ce529817'})

Todo.findByIdAndRemove('5b61d926c7ec6ad0ce529817').then((todo) => {
    console.log(todo);
})