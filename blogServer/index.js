const express = require('express');

const app = express();

const cors = require('cors');

const items = require('./data.js').items;
const _ = require('lodash');

app.use(cors());

function filterItems(items, name) {
  if (!name) {
    return items;
  }
  const filter = RegExp(name, 'i');
  return _.filter(items, function(o) {
    return o.text.match(filter);
  });
}

function itemsPerPage(items, page) {
  if (!page) {
    return items;
  }
  const itemsPagination = _.chunk(items, 3);
  return itemsPagination[page - 1];
}

app.get('/', function(req, res) {
  const {name, page} = req.query;
  let itemsToReturn = items;
  itemsToReturn = filterItems(itemsToReturn, name);
  itemsToReturn = itemsPerPage(itemsToReturn, page);

  res.json(itemsToReturn);
});

app.get('/posts/:id', function(req, res) {
  res.json(_.find(items, ['id', req.params.id]));
});

app.post('/', function (req, res) {
  const obj = _.find(items, ['id', req.query['id']]);
  obj.meta.likesCount += 1;
  res.send(obj);
});

app.listen(3001, function() {
  console.log('Server started on 3001');
});
