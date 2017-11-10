const express = require('express');

const app = express();

const cors = require('cors');

const items = require('./data.js').items;
const _ = require('lodash');

app.use(cors());

app.get('/', function(req, res) {
  res.json(items);
});

app.get('/posts/:id', function(req, res) {
  res.json(_.find(items, ['id', req.params.id]));
});

app.listen(3001, function() {
  console.log('Server started on 3001');
});
