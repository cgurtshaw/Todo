const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// var id = '5a79d59231a4db5ac4795f6211';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));
