//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
    if (error) {
        return console.log('Unable to connect to MongoDB server');
    } else {
        console.log('Connected to MongoDB server')
    }

    // db.collection('Todos').find({
    //     _id: new ObjectID('5b5f2569fb620b9f68848ab1')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable to fetch todos ", err)
    // })

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos');
    //     console.log('Todos count: ', count);
    // }, (err) => {
    //     console.log("Unable to fetch todos ", err)
    // })

    db.collection('Users').find({
        name: 'Jeff'
    }).toArray().then((docs) => {
        console.log('users');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Unable to fetch todos ", err)
    })

    //db.close();
})