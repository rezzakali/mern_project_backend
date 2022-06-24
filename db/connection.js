const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/reactTodo')
  .then(() => {
    console.log('Connnection successfully established!');
  })
  .catch(() => {
    console.log('Connection Failed!');
  });
