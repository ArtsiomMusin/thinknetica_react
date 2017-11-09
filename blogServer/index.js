const express = require('express');

const app = express();

const cors = require('cors');

const items = require('./data.js').items;

app.use(cors());

app.get('/', function(req, res) {
  res.json(items);
});

app.get('/posts/59f72ed596059543b33bb615', function(req, res) {
  res.json(items[0]);
});

app.get('/posts/59f72ed596059543b33bb616', function(req, res) {
  res.json(items[1]);
});

app.get('/posts/59f72ed596059543b33bb617', function(req, res) {
  res.json(items[2]);
});

app.listen(3001, function() {
  console.log('Server started on 3001');
});
