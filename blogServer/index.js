const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');

const items = require('./data.js').items;
const _ = require('lodash');
const moment = require('moment');

app.use(bodyParser.json());
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

function generateItemID() {
  return Math.random().toString(25).substring(2, 15) +
    Math.random().toString(25).substring(2, 15);
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

app.post('/posts/new', function (req, res) {
  const newPost = req.body;
  const obj = {
    id: generateItemID(),
    image: { src: 'https://goo.gl/9CzY5E'},
    meta: {
      author: newPost.author,
      created: moment().format('YYYY-MM-DD'),
      updated: null,
      likesCount: 0
    },
    text: newPost.title
  };
  items.push(obj);
  res.send(obj);
});

app.put('/posts/:id/edit', function (req, res) {
  const updatedPost = req.body;
  const obj = _.find(items, ['id', updatedPost.id]);
  obj.meta.author = updatedPost.author;
  obj.meta.created = updatedPost.created;
  obj.text = updatedPost.title;
  res.send(obj);
});

app.listen(3001, function() {
  console.log('Server started on 3001');
});
