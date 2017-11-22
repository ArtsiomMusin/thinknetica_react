const express = require('express');

const app = express();

const cors = require('cors');

const items = require('./data.js').items;
const _ = require('lodash');

app.use(cors());

app.get('/', function(req, res) {
  const query = req.query;
  var itemToReturn = items;
  if (query['name']) {
    const filter = RegExp(query['name'], 'i');
    itemToReturn = _.filter(itemToReturn, function(o) {
      return o.text.match(filter);
    });
  }
  if (query['page']) {
    const itemsPagination = _.chunk(itemToReturn, 3);
    itemToReturn = itemsPagination[query['page'] - 1];
  }
  res.json(itemToReturn);
});

app.get('/posts/:id', function(req, res) {
  res.json(_.find(items, ['id', req.params.id]));
});

app.post('/', function (req, res) {
  const obj = _.find(items, ['id', req.query['id']]);
  obj.meta.likesCount += 1;
  res.send(items);
});

app.listen(3001, function() {
  console.log('Server started on 3001');
});
