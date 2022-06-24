const express = require('express');
const dotenv = require('dotenv');
const todoHandler = require('./handler/todoHandler');
require('./db/connection');
const cors = require('cors');

const port = process.env.PORT || 5000;
const hostname = process.env.HOSTNAME || '127.0.0.1';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.use('/todo', todoHandler);

//error handling
app.use((err, req, res, next) => {
  if (res.headerSent) {
    return next(err);
  }
  res.status(500).json({ error: err.message });
});

app.listen(port, hostname, () => {
  console.log(
    `Your server is running successfully at http://${hostname}:${port}`
  );
});
