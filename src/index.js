import React from 'react';
import ReactDOM from 'react-dom';
import BlogPage from './components/containers/BlogPage';
import moment from 'moment';

const formatDate = function(date) {
  return moment(date).format('YYYY-MM-DD');
};

const threeItems = [
  {
    id: '59f72ed596059543b33bb615',
    image: { src: 'https://goo.gl/9CzY5E'},
    meta: {
      author: 'Artem',
      created: formatDate('20120120'),
      updated: formatDate('20170720'),
      likesCount: 30
    },
    text: 'I am a good guy'
  },
  {
    id: '59f72ed596059543b33bb616',
    image: { src: 'https://goo.gl/J4q89x' },
    meta: {
      author: 'Vasya',
      created: formatDate('20150320'),
      likesCount: 45
    },
    text: 'Flower!'
  },
  {
    id: '59f72ed596059543b33bb617',
    image: { src: 'https://goo.gl/emZYMB' },
    meta: {
      updated: formatDate('19800320'),
      likesCount: 10
    },
    text: 'Beeball'
  }
];

ReactDOM.render(
  React.createElement(BlogPage, {items: threeItems}),
  document.getElementById('app')
);
