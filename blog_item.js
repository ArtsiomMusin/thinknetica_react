const DOM = React.DOM;

const BlogItem = ({src, text}) => (
  DOM.div(
    null,
    React.createElement(
      Image,
      {
        src: src,
        width: "50",
        height: "50",
        alt: ""
      }
    ),
    React.createElement(TextBox, {text: text})
  )
);

const three_items = [
  {
    src: "https://goo.gl/9CzY5E",
    text: "I'm a good guy"
  },
  {
    src: "https://goo.gl/J4q89x",
    text: "Flower!"
  },
  {
    src: "https://goo.gl/emZYMB",
    text: "Beeball"
  }
];
const list = _.map(three_items, (item, index) =>
  DOM.li(
    { key: index },
    React.createElement(BlogItem, {src: item.src, text: item.text})
  )
);

ReactDOM.render(
  DOM.ul(
    null,
    list
  ),
  document.getElementById("blogitem")
);
