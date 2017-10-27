const BlogItem = (props) => (
  DOM.div(
    null,
    React.createElement(
      Image,
      {
        src: props.src
      }
    ),
    React.createElement(TextBox, {text: props.text}),
    DOM.span(null, `(Written by ${props.author})`),
    DOM.div(
      null,
      props.created && DOM.div(null, `Created: ${props.created}`),
      props.updated && DOM.div(null, `Updated: ${props.updated}`)
    )
  )
);

BlogItem.propTypes = {
  author: PropTypes.string,
  created: PropTypes.string,
  updated: PropTypes.string
};


BlogItem.defaultProps = {
  author: 'Unknown',
  created: null,
  updated: null
};

const three_items = [
  {
    src: "https://goo.gl/9CzY5E",
    text: "I'm a good guy",
    author: "Artem",
    created: moment("20120120").format("YYYY-MM-DD"),
    updated: moment("20170720").format("YYYY-MM-DD")

  },
  {
    src: "https://goo.gl/J4q89x",
    text: "Flower!",
    author: "Vasya",
    created: moment("20150320").format("YYYY-MM-DD")
  },
  {
    src: "https://goo.gl/emZYMB",
    text: "Beeball",
    updated: moment("19800320").format("YYYY-MM-DD")
  }
];
const list = _.map(three_items, (item, index) =>
  DOM.li(
    { key: index },
    React.createElement(
      BlogItem,
      {
        src: item.src,
        text: item.text,
        author: item.author,
        created: item.created,
        updated: item.updated
      }
    )
  )
);

ReactDOM.render(
  DOM.ul(null, list),
  document.getElementById("blogitem")
);
