const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    default: new Date(),
  },
});

// creating the module
const Todo = mongoose.model('mernTodo', todoSchema);

module.exports = Todo;
