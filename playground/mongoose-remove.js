const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
//
// Todo.findOneAndRemove({_id: ''}).then((result) => {
//   console.log(result);
// });

Todo.findByIdAndRemove('5a7a093bcd2d335c17ed1177').then((todo) => {
  console.log(todo);
});
