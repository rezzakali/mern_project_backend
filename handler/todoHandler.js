const express = require('express');
const Todo = require('../schemas/todoSchema');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const data = await req.body;
    const mainData = data.body;
    const obj = JSON.parse(mainData);
    const todo = new Todo(obj);
    await todo.save();
    res.send('success');
  } catch (err) {
    if (err) {
      res.status(500).json({ error: err.message });
    }
  }
});

module.exports = router;
