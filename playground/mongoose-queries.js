const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5b5f89d596df0edc28f5c29c11';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos)
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todoById) => {
//     if(!todoById){
//         return console.log("ID Not Found")
//     }
//     console.log('Todo', todoById)
// }).catch((e) => {
//     console.log(e);
// });

var id = '5b5f63a525777d282fe72851';

User.findById(id).then((user) => {
    if (!user) {
        return console.log("ID Not Found")
    }
    console.log('User', user)
}).catch((e) => {
    console.log(e);
})